import React from "react";
import { StepContentsMap, StepContentsProps } from "../interfaces/step-contents.interface";
import FormImportFileContainer from "../../forms/FormImportFile/FormImportFileContainer";
import TransferListEndpointsContainer from "../../transferList/TransferListEndpoints/TransferListEndpointsContainer";
import TransferListMethodsContainer from "../../transferList/TransferListComponents/TransferListComponentsContainer";

const stepContentsMap: StepContentsMap = {
  0: <FormImportFileContainer />,
  1: <TransferListEndpointsContainer />,
  2: <TransferListMethodsContainer />,
  3: <div>Conteúdo de Componentes</div>,
  4: <div>Conteúdo de Requisições</div>,
};

const StepContents: React.FC<StepContentsProps> = ({ activeStep }) => {
  const activeStepContent = stepContentsMap[activeStep];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {activeStepContent}
    </div>
  );
};

export default StepContents;
