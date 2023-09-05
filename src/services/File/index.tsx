import jsYaml from "js-yaml";

const FileService = {
  parse: async (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const fileContents = e.target.result as string;
          const fileName = file.name.toLowerCase();
          const fileType = fileName.endsWith(".json")
            ? "json"
            : fileName.endsWith(".yaml") || fileName.endsWith(".yml")
            ? "yaml"
            : null;
          let data;

          switch (fileType) {
            case "json":
              try {
                data = JSON.parse(fileContents);
                resolve(data);
              } catch (error) {
                reject(error);
              }
              break;
            case "yaml":
              try {
                data = jsYaml.load(fileContents);
                resolve(data);
              } catch (error) {
                reject(error);
              }
              break;
            default:
              reject(new Error("Tipo de arquivo não suportado"));
              break;
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
