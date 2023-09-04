interface TransferListMethodsProps {
  left: readonly string[];
  setLeft: (value: string[]) => void;
  right: readonly string[];
  onAllRight: () => void;
  onCheckedRight: () => void;
  onCheckedLeft: () => void;
  onAllLeft: () => void;
  onToggle: (value: string) => () => void;
  checked: readonly string[];
  endpoint: string;
}

export type { TransferListMethodsProps };
