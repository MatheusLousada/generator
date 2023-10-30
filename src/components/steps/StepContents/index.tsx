import React from "react";
import { StepContentsMap, StepContentsProps } from "../interfaces/step-contents.interface";
import FormImportFileContainer from "../../forms/FormImportFile/FormImportFileContainer";
import ListComponentsContainer from "../../list/ListComponents/ListComponentsContainer";
import FormRequestsContainer from "../../forms/FormRequests/FormImportFileContainer";
import styles from "./styles";

const stepContentsMap: StepContentsMap = {
  0: <FormImportFileContainer />,
  1: <ListComponentsContainer />,
  2: <FormRequestsContainer />,
  3: <div></div>,
};

const StepContents: React.FC<StepContentsProps> = ({ activeStep }) => {
  const activeStepContent = stepContentsMap[activeStep];

  return (
    <div
      style={styles.ActiveStepContentStyle}
    >
      {activeStepContent}
    </div>
  );
};

export default StepContents;
