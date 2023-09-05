import React from "react";
import ListComponents from "./ListComponents";
import { styledComponents } from "./interfaces/styles";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";

export default function ListComponentsContainer() {
  const [checked, setChecked] = React.useState<string[]>([""]);
  const components = ["table", "list", "button"];
  const { Title } = styledComponents;
  const { formData, setFormData } = useGeneratorContext();

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      formData.selectedComponents.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
      formData.selectedComponents = formData.selectedComponents.filter(
        (component) => component !== value
      );
    }

    setChecked(newChecked);
    setFormData(formData);
  };

  return (
    <>
      <Title>Componentes</Title>
      <ListComponents
        onToggle={handleToggle}
        checked={checked}
        components={components}
      />
    </>
  );
}
