import React, { useState } from "react";
import StepHeader from "../../components/steps/StepHeader";
import StepButtons from "../../components/steps/StepButtons";
import { StyledDiv } from "./styles";
import { steps } from "./enums/steps";
import StepContents from "../../components/steps/StepContents";

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <StyledDiv>
        <StepHeader steps={steps} activeStep={activeStep} />

        {activeStep === steps.length ? (
          <div>
            <p style={{ color: "white" }}>
              Passo a passo concluído. Você chegou ao último passo!
            </p>
          </div>
        ) : (
          <>
            <StepButtons
              activeStep={activeStep}
              steps={steps}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </>
        )}

        <StepContents activeStep={activeStep} />
      </StyledDiv>
    </>
  );
};

export default Home;
