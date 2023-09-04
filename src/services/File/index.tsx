import jsYaml from "js-yaml";

const FileService = () => {
  const parse = async (file: File): Promise<any> => {
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
              } catch (error) {
                reject(error);
              }
              break;
            case "yaml":
              try {
                data = jsYaml.load(fileContents);
              } catch (error) {
                reject(error);
              }
              break;
            default:
              reject(new Error("Tipo de arquivo não suportado"));
              break;
          }

          if (data) {
            resolve(data);
          }
        }
      };

      reader.readAsText(file);
    });
  };

  return {
    parse,
  };
};

export default FileService;
