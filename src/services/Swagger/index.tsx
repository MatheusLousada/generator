import { Component } from "react";
import OpenAPISchemaValidator from "openapi-schema-validator";
import FileService from "../File";

class SwaggerService extends Component {
  validate(data: any) {
    const validator = new OpenAPISchemaValidator({
      version: data.openapi,
      extensions: data.openapi,
    });

    const validationResult = validator.validate(data);
    if (validationResult.errors.length > 0) {
      throw new Error("Arquivo do Swagger inválido.");
    }
  }

  async readFile(file: File): Promise<any> {
    return await FileService.parse(file);
  }
}

export default SwaggerService;
