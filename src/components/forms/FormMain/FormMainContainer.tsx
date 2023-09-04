import React from "react";
import FormMain from "./FormMain";
import SwaggerService from "../../../services/Swagger";
import { toast } from "react-toastify";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";

const FormMainContainer: React.FC = () => {
  const swaggerService = SwaggerService();
  const { setFormData, setFileData } = useGeneratorContext();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      try {
        const data = await swaggerService.readFile(file);
        swaggerService.validate(data);
        setFileData(data);
        toast.success("Arquivo validado");
      } catch (error) {
        toast.error("Arquivo inválido");
      }
    }
  };

  return <FormMain onInputChange={handleInput} onFileChange={handleFile} />;
};

export default FormMainContainer;
