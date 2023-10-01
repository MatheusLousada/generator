interface StepButtonsProps {
  activeStep: number;
  steps: string[];
  handleBack: () => void;
  handleNext: () => void;
}

export type { StepButtonsProps };
