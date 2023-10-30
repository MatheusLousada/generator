import { toast } from "react-toastify";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import ButtonGenerator from "./ButtonGenerator";
import GeneratorService from "../../../services/Generator";

const ButtonGeneratorContainer = () => {
  const { formData } = useGeneratorContext();

  const handleClick = async () => {
    try {
      const generatorService = new GeneratorService(formData);
      const filesGenerated = await generatorService.generateAndDownloadFiles();

      if (filesGenerated) {
        toast.success("Documentos gerados com sucesso, e download realizado!");
      } else {
        toast.error("Erro ao gerar os documentos");
      }
    } catch (error) {
      toast.error("Erro ao gerar os documentos");
    }
  };

  return <ButtonGenerator onClick={handleClick} />;
};

export default ButtonGeneratorContainer;
