import { Components } from "../../../../contexts/interfaces/generator.interface";

interface ListComponentsProps {
  onToggle: (value: string) => () => void;
  checked: string[];
  selectedComponents: Components[];
}

interface ListComponentsSelectedsProps {
  selectedComponents: Components[];
}

export type {ListComponentsProps, ListComponentsSelectedsProps}