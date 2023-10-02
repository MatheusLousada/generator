import { toast } from "react-toastify";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import ButtonGenerator from "./ButtonGenerator";
import GeneratorService from "../../../services/Generator";

const ButtonGeneratorContainer = () => {
  const { formData } = useGeneratorContext();

  const handleClick = async () => {
    if (!(formData?.selectedComponents.length > 0)) {
      toast.error("Você deve selecionar pelo menos um componente");
      return null;
    }

    await GeneratorService.generateAndDownloadFiles(formData);
    toast.success("Download realizado");
  };

  return (
    <>
      <ButtonGenerator onClick={handleClick} />
    </>
  );
};

export default ButtonGeneratorContainer;
