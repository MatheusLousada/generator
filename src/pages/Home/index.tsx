import React, { useState } from "react";
import StepHeader from "../../components/steps/StepHeader";
import StepButtons from "../../components/steps/StepButtons";
import { StyledDiv } from "./styles";
import { steps } from "./enums/steps";
import StepContents from "../../components/steps/StepContents";
import { useGeneratorContext } from "../../contexts/GeneratorContext";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { formData } = useGeneratorContext();

  const verifyStepData = () => {
    if (activeStep === 1 && formData.selectedComponents.length <= 0) {
      toast.error("Você deve selecionar pelo menos um componente");
      return false;
    }

    if (activeStep === 2 && !formData.request.baseURL) {
      toast.error("O campo BaseURL é obrigatório");
      return false;
    }

    return true;
  };

  const handleNext = () => {
    const stepDataCorrect = verifyStepData();
    if (!stepDataCorrect) return;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <StyledDiv>
        <StepHeader steps={steps} activeStep={activeStep} />

        <StepButtons
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
        />

        <StepContents activeStep={activeStep} />
      </StyledDiv>
    </>
  );
};

export default Home;
