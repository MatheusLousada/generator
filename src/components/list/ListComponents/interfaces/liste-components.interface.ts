interface ListComponentsProps {
  onToggle: (value: string) => () => void;
  checked: string[];
}

export type {ListComponentsProps}