import jsYaml from "js-yaml";

const FileService = {
  getFileType: (fileName: string): string | null => {
    const extension = fileName
      .slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2)
      .toLowerCase();

    switch (extension) {
      case "json":
        return "json";
      case "yaml":
      case "yml":
        return "yaml";
      default:
        return null;
    }
  },

  handleParsing: (fileContents: string, fileType: string | null) => {
    switch (fileType) {
      case "json":
        return JSON.parse(fileContents);
      case "yaml":
        return jsYaml.load(fileContents);
      default:
        throw new Error("Tipo de arquivo não suportado");
    }
  },

  parse: async (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const fileContents = e.target.result as string;
          const fileName = file.name.toLowerCase();
          const fileType = FileService.getFileType(fileName);

          try {
            const data = FileService.handleParsing(fileContents, fileType);
            resolve(data);
          } catch (error) {
            reject(error);
          }
        }
      };

      reader.readAsText(file);
    });
  },

  createAndDownloadZip: async (zipName: string, content: Blob) => {
    const zipBlob = new Blob([content], { type: "application/zip" });
    const zipURL = window.URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = zipURL;
    link.download = zipName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(zipURL);
  },
};

export default FileService;
