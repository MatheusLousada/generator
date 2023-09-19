import React, { useEffect } from "react";
import ListComponents from "./ListComponents";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import { Components, FormData } from "../../../contexts/interfaces/generator.interface";
import { components } from "./styles";

export default function ListComponentsContainer() {
  const [checked, setChecked] = React.useState<string[]>([""]);
  const { Title } = components;
  const { formData, setFormData } = useGeneratorContext();

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      const newSelectedComponents: Components[] = [
        ...(formData.selectedComponents || []),
        { type: value, endpoints: [], amount: 1 },
      ];
      const newFormData: FormData = {
        ...formData,
        selectedComponents: newSelectedComponents,
      };
      setFormData(newFormData);
    } else {
      newChecked.splice(currentIndex, 1);
      const newSelectedComponents: Components[] = (
        formData.selectedComponents || []
      ).filter((component) => component.type !== value);
      const newFormData: FormData = {
        ...formData,
        selectedComponents: newSelectedComponents,
      };
      setFormData(newFormData);
    }

    setChecked(newChecked);
  };

  // useEffect(() => {
  //   console.log('formData: ')
  //   console.log(formData)
  //   console.log('----------------')
  // }, [formData]);

  return (
    <>
      <Title>Componentes</Title>
      <ListComponents
        onToggle={handleToggle}
        checked={checked}
      />
    </>
  );
}
