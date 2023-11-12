import React from "react";
import FormImportFile from "./FormImportFile";
import SwaggerService from "../../../services/Swagger";
import { toast } from "react-toastify";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import { Endpoints, FileData } from "../../../contexts/interfaces/generator.interface";

const FormImportFileContainer: React.FC = () => {
  const { setFileData, setFormData } = useGeneratorContext();
  const swaggerService = new SwaggerService({});

  const setFormDataEndpoints = (data: FileData) => {
    if (data && data.paths) {
      const paths = data.paths;
      const endpoints: Endpoints[] = Object.entries(paths).map(([endpoint, methods]) => ({
        endpoint,
        methods,
      }));
  
      setFormData((prevFormData) => ({
        ...prevFormData,
        endpoints,
      }));
    }
  };

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      try {
        const data = await swaggerService.readFile(file);
        swaggerService.validate(data);

        setFileData(data);
        setFormDataEndpoints(data);

        toast.success("Arquivo válido");
      } catch (error) {
        toast.error("Arquivo inválido");
      }
    }
  };

  return <FormImportFile onFileChange={handleFile} />;
};

export default FormImportFileContainer;

