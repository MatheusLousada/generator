import OpenAPISchemaValidator from "openapi-schema-validator";
import FileService from "../File";

const SwaggerService = () => {
  const validate = (data: any) => {
    const validator = new OpenAPISchemaValidator({
      version: data.openapi,
      extensions: data.openapi,
    });
    const validationResult = validator.validate(data);

    if (validationResult.errors.length > 0) {
      throw new Error("Arquivo do Swagger inválido.");
    }
  };

  const readFile = async (file: File): Promise<any> => {
    const service = FileService();
    return await service.parse(file);
  };

  return {
    validate,
    readFile,
  };
};

export default SwaggerService;
