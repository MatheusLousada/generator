import React from "react";
import FormRequests from "./FormRequests";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import ListInformationsContainer from "../../list/ListInformations/ListInformationsContainer";
import { styles } from "./styles";

const FormRequestsContainer: React.FC = () => {
  const { setFormData } = useGeneratorContext();
  const informations: string[] = [
    "Defina o baseURL que servirá de base para as suas requisições via Axios",
    "Defina o 'Access token' que será utilizado no header de Authorization",
  ];

  const handleInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return(
    <div style={styles.DivMasterComponents}>
      <FormRequests onInputChange={handleInput} />
      <ListInformationsContainer informations={informations}/>
    </div>
  );
};

export default FormRequestsContainer;
