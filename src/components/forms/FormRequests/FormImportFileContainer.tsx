import React from "react";
import FormRequests from "./FormRequests";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";

const FormRequestsContainer: React.FC = () => {
  const { setFormData } = useGeneratorContext();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return <FormRequests onInputChange={handleInput} />;
};

export default FormRequestsContainer;
