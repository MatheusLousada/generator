interface StepContentsProps {
  activeStep: number;
}

interface StepContentsMap {
  [key: number]: JSX.Element;
}

export type { StepContentsProps, StepContentsMap };
