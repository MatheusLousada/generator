import JSZip from "jszip";
import {
  Components,
  FormData,
} from "../../contexts/interfaces/generator.interface";
import FileService from "../File";
import { toast } from "react-toastify";
import ListGenerator from "../../generators/List";
import { ComponentData } from "./interfaces/generator.interface";
import RadioGroupGenerator from "../../generators/RadioGroup";
import SelectGenerator from "../../generators/Select";
import TableGenerator from "../../generators/Table";
import TextFieldGenerator from "../../generators/TextField";
import ButtonGenerator from "../../generators/Button";

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
      Button: ButtonGenerator,
      RadioGroup: RadioGroupGenerator,
      Select: SelectGenerator,
      Table: TableGenerator,
      TextField: TextFieldGenerator,
    };

    const GeneratorClass = generatorClasses[elementType];

    if (GeneratorClass) {
      const generator = new GeneratorClass(
        elementType,
        endpoint && endpoint?.endpoints ? endpoint?.endpoints : null,
        count
      );
      const containerContent = generator.generateContainer();
      const fileContent = generator.generateView();
      const requestContent =
        endpoint && endpoint?.endpoints ? generator.generateRequest() : null;

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
  }

  private generateComponentRequestsFiles(
    componentData: ComponentData,
    elementType: string
  ) {
    if (componentData.requestContent) {
      this.requestsFolder?.file(
        elementType + `Requests.tsx`,
        componentData.requestContent
      );
    }
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

  public async generateAndDownloadFiles() {
    if (!this.folder || !this.componentsFolder || !this.requestsFolder) {
      toast.error("Erro ao criar a pasta no arquivo zip");
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
      const endpoints = component.endpoints || [];

      const generateAndDownload = (endpoint: any) => {
        const componentData = this.generateComponentData(
          componentType,
          endpoint,
          count
        );

        if (componentData) {
          const componentsAmount = component?.amount ?? 0;
          for (let index = 1; index <= componentsAmount; index++) {
            this.generateComponentFiles(componentData, componentType, index);
          }

          this.generateComponentRequestsFiles(componentData, componentType);
        }

        count++;
      };

      endpoints.length > 0
        ? endpoints.forEach(generateAndDownload)
        : generateAndDownload(null);
    }

    try {
      const content = await this.zip.generateAsync({ type: "blob" });
      await FileService.createAndDownloadZip("arquivos_zipados.zip", content);
      return content;
    } catch (error) {
      toast.error("Erro ao criar e fazer o download do arquivo zip");
    }
  }
}

export default GeneratorService;
