import { useEffect, useState } from "react";
import ListComponents from "./ListComponents";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import {
  Components,
  FormData,
} from "../../../contexts/interfaces/generator.interface";
import ListInformationsContainer from "../ListInformations/ListInformationsContainer";
import { styles } from "./styles";

export default function ListComponentsContainer() {
  const { formData, setFormData } = useGeneratorContext();
  const [checked, setChecked] = useState<string[]>([]);
  const informations: string[] = [
    "Selecione os componentes que você deseja gerar",
    "Selecione a quantidade que será gerada de cada tipo de componente",
    "Clique no ícone de engrenagem para selecionar os endpoints/métodos que alimentarão cada componente; não é obrigatório",
  ];

  useEffect(() => {
    if (formData.selectedComponents) {
      const selectedTypes = formData.selectedComponents
        .map((component) => component.type)
        .filter((type) => type !== undefined && type !== null) as string[];

      setChecked(selectedTypes);
    } else {
      setChecked([]);
    }
  }, [formData.selectedComponents]);

  const handleComponentOnList = (
    componentAlreadySelected: boolean,
    currentIndex: number,
    value: string
  ) => {
    if (componentAlreadySelected) {
      setChecked((prevState) => prevState.filter((type) => type !== value));

      const newSelectedComponents: Components[] = (
        formData.selectedComponents || []
      ).filter((component) => component.type !== value);

      const newFormData: FormData = {
        ...formData,
        selectedComponents: newSelectedComponents,
      };

      setFormData(newFormData);
    } else {
      setChecked((prevState) => [...prevState, value]);

      const newSelectedComponents: Components[] = [
        ...(formData.selectedComponents || []),
        { type: value, endpoints: [], amount: 1 },
      ];

      const newFormData: FormData = {
        ...formData,
        selectedComponents: newSelectedComponents,
      };

      setFormData(newFormData);
    }
  };

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const componentAlreadySelected = currentIndex !== -1;
    handleComponentOnList(componentAlreadySelected, currentIndex, value);
  };

  return (
    <div style={styles.DivMasterComponents}>
      <ListComponents
        onToggle={handleToggle}
        checked={checked}
        selectedComponents={formData.selectedComponents}
      />
      <ListInformationsContainer informations={informations} />
    </div>
  );
}
