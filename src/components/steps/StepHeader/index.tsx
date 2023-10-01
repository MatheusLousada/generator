import React from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { StepHeaderProps } from "../interfaces/step-header.interface";
import styles from "./styles";

const StepHeader: React.FC<StepHeaderProps> = ({ steps, activeStep }) => {
  const getStepIconStyle = (stepIndex: number) => {
    if (stepIndex === activeStep) {
      return {
        color: "#00ed64",
      };
    } else if (stepIndex < activeStep) {
      return {
        color: "#00ed64",
      };
    } else {
      return {
        color: "gray",
      };
    }
  };

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      style={styles.StepperStyle}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel
            StepIconProps={{
              style: getStepIconStyle(index),
            }}
          >
            <div style={styles.StepperDivStyle}>{label}</div>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepHeader;
