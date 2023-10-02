import JSZip from "jszip";
import { toast } from "react-toastify";
import FileService from "../File";
import ListGenerator from "../../generators/List";
import { FormData } from "../../contexts/interfaces/generator.interface";

const GeneratorService = {
  generateAndDownloadFiles: async (formData: FormData) => {
    const zip = new JSZip();
    const folderName = "arquivos";
    const folder = zip.folder(folderName);

    if (!folder) {
      toast.error("Erro ao criar a pasta no arquivo zip");
      return null;
    }

    const componentsFolder = folder.folder("components");
    const requestsFolder = folder.folder("requests");

    if (!componentsFolder || !requestsFolder) {
      toast.error("Erro ao criar uma das pastas no arquivo zip");
      return null;
    }

    const cleanedComponents = formData.selectedComponents.map((element) => {
      const type = element && element.type ? element.type : "";
      return {
        ...element,
        type,
      };
    });

    for (const element of cleanedComponents) {
      if (!element) {
        continue;
      }

      const elementType = element.type.charAt(0).toUpperCase() + element.type.slice(1);
      const folder = componentsFolder.folder(element.type);

      if (folder) {
        let count = 1;

        for (const end of element.endpoints || []) {
          const endpoint = end.endpoints[0]?.endpoint || "";
          const cleanedEndpoint = endpoint.replace(/{[^}]+}/g, "");
          const words = cleanedEndpoint
            .split("/")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
          const result = words.join("");
          const idFolder = elementType + result + `_${count}`;
          const newFolder = folder.folder(idFolder);

          switch (elementType) {
            case "Table":
              break;
            case "List":
              const id = elementType + result;
              const containerContent = ListGenerator.generateListContainer(elementType, count, end.endpoints);
              const fileContent = ListGenerator.generateList(id, count);
              const requestContent = ListGenerator.generateRequest(
                end.endpoints,
                formData.baseURL,
              );

              newFolder &&
                newFolder.file(idFolder + "Container.tsx", containerContent);
              newFolder && newFolder.file(idFolder + ".tsx", fileContent);
              requestsFolder.file(
                element.type + `Requests_${count}.tsx`,
                requestContent
              );
              break;
            case "Button":
              break;

            default:
              break;
          }

          count++;
        }
      }
    }

    const content = await zip.generateAsync({ type: "blob" });

    try {
      await FileService.createAndDownloadZip("arquivos_zipados.zip", content);
    } catch (error) {
      toast.error("Erro ao criar e fazer o download do arquivo zip");
    }

    return content;
  },
};

export default GeneratorService;
