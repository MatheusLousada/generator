import JSZip from "jszip";
import {
  Components,
  FormData,
} from "../../contexts/interfaces/generator.interface";
import FileService from "../File";
import { toast } from "react-toastify";
import ListGenerator from "../../generators/List";
import { ComponentData } from "./interfaces/generator.interface";
import AxiosGenerator from "../../generators/Axios";

class GeneratorService {
  formData: FormData;
  folderName: string;
  zip: JSZip;
  folder: JSZip | null;
  componentsFolder: JSZip | null;
  requestsFolder: JSZip | null;

  constructor(formData: FormData) {
    this.formData = formData;
    this.folderName = "arquivos";
    this.zip = new JSZip();
    this.folder = this.zip.folder(this.folderName);
    this.componentsFolder = this.folder
      ? this.folder.folder("components")
      : null;
    this.requestsFolder = this.folder ? this.folder.folder("requests") : null;
  }

  private generateComponentData(
    elementType: string,
    endpoint: any,
    count: number
  ): ComponentData | null {
    const generatorClasses: Record<string, any> = {
      List: ListGenerator,
    };

    const GeneratorClass = generatorClasses[elementType];

    if (GeneratorClass) {
      const generator = new GeneratorClass(
        elementType,
        endpoint.endpoints,
        this.formData.request.baseURL,
        count
      );
      const containerContent = generator.generateContainer();
      const fileContent = generator.generateView();
      const requestContent = generator.generateRequest();
      return {
        containerContent,
        fileContent,
        requestContent,
      };
    }

    return null;
  }

  private generateComponentFiles(
    componentData: ComponentData,
    elementType: string,
    count: number
  ) {
    const folder = this.componentsFolder?.folder(elementType);
    const idFolder = elementType + count;
    const newFolder = folder?.folder(idFolder);

    if (newFolder) {
      newFolder.file(
        idFolder + "Container.tsx",
        componentData.containerContent
      );
      newFolder.file(idFolder + ".tsx", componentData.fileContent);
    }

    this.requestsFolder?.file(
      elementType + `Requests_${count}.tsx`,
      componentData.requestContent
    );
  }

  private getComponents(): Components[] {
    return this.formData.selectedComponents.map((element) => {
      const type = element && element.type ? element.type : "";
      return {
        ...element,
        type,
      };
    });
  }

  private getComponentType(component: Components) {
    if (component && component.type) {
      return component.type.charAt(0).toUpperCase() + component.type.slice(1);
    }

    return "";
  }

  private getAxiosContsContent() {
    const axios = new AxiosGenerator(this.formData.request.baseURL, this.formData.request.accessToken); 
    return axios.generateContent();
  }

  private generateAxiosConstsFile() {
    this.requestsFolder?.file(`AxiosConsts.tsx`, this.getAxiosContsContent());
  }

  public async generateAndDownloadFiles() {
    if (!this.folder) {
      toast.error("Erro ao criar a pasta no arquivo zip");
      return;
    }

    if (!this.componentsFolder || !this.requestsFolder) {
      toast.error("Erro ao criar uma das pastas no arquivo zip");
      return;
    }

    const components: Components[] = this.getComponents();
    for (const component of components) {
      if (!component) {
        continue;
      }

      let count = 1;
      const componentType = this.getComponentType(component);

      for (const endpoint of component.endpoints || []) {
        const componentData = this.generateComponentData(
          componentType,
          endpoint,
          count
        );

        if (componentData) {
          this.generateComponentFiles(componentData, componentType, count);
        }
        count++;
      }
    }

    this.generateAxiosConstsFile();
    const content = await this.zip.generateAsync({ type: "blob" });

    try {
      await FileService.createAndDownloadZip("arquivos_zipados.zip", content);
    } catch (error) {
      toast.error("Erro ao criar e fazer o download do arquivo zip");
    }

    return content;
  }
}

export default GeneratorService;
