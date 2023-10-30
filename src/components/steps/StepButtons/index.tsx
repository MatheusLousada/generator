import React from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { StepButtonsProps } from "../interfaces/step-buttons.interface";
import styles from "./styles";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import ButtonGeneratorContainer from "../../button/ButtonGenerator/ButtonGeneratorContainer";

const StepButtons: React.FC<StepButtonsProps> = ({
  activeStep,
  steps,
  handleBack,
  handleNext,
}) => {
  const { fileData } = useGeneratorContext();
  return (
    <div style={styles.ListStyle}>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        variant="outlined"
        style={
          activeStep === 0 ? styles.ListItemButtonGray : styles.ListItemButton
        }
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={
            activeStep === 0
              ? styles.FontAwesomeIconStyleGray
              : styles.FontAwesomeIconStyleGreen
          }
        />
      </Button>

      <div style={styles.DivRigthButton}>
        {activeStep === steps.length - 1 ? (
          <ButtonGeneratorContainer />
        ) : (
          <Button
            variant="contained"
            style={
              !fileData ? styles.TextFieldPropsGray : styles.TextFieldProps
            }
            onClick={handleNext}
            disabled={!fileData}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={styles.FontAwesomeIconStyleWhite}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepButtons;
