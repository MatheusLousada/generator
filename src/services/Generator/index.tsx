import JSZip from "jszip";
import { toast } from "react-toastify";
import FileService from "../File";
import ListGenerator from "../../generators/List";

const GeneratorService = {
  generateAndDownloadFiles: async () => {
    const zip = new JSZip();
    const folderName = "arquivos";
    const folder = zip.folder(folderName);

    if (!folder) {
      toast.error("Erro ao criar a pasta no arquivo zip");
      return null;
    }

    const componentsFolder = folder.folder("components");
    if (!componentsFolder) {
      toast.error("Erro ao criar a pasta 'components' no arquivo zip");
      return null;
    }

    const requestsFolder = folder.folder("requests");
    if (!requestsFolder) {
      toast.error("Erro ao criar a pasta 'requests' no arquivo zip");
      return null;
    }

    const listFolder = componentsFolder.folder("List");
    if (!listFolder) {
      toast.error("Erro ao criar a pasta 'List' dentro de 'components'");
      return null;
    }

    const listContainerContent = ListGenerator.generateListContainer();
    const listContent = ListGenerator.generateList();
    const requestContent = ListGenerator.generateRequest();

    listFolder.file("ListContainer.tsx", listContainerContent);
    listFolder.file("List.tsx", listContent);
    requestsFolder.file("ListRequests.tsx", requestContent);

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
