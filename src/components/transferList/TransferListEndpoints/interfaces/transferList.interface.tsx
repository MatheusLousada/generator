interface TransferListEndpointsProps {
  left: readonly string[];
  right: readonly string[];
  onAllRight: () => void;
  onCheckedRight: () => void;
  onCheckedLeft: () => void;
  onAllLeft: () => void;
  onToggle: (value: string) => () => void;
  checked: readonly string[];
}

export type { TransferListEndpointsProps };
