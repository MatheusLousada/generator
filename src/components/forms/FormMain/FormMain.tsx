import React from "react";
import { FormMainProps } from "./interfaces/FormMainProps.interface";
import { components } from "./styles";
import InputFile from "../../inputs/InputFile";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import TransferListEndpointsContainer from "../../transferList/TransferListEndpoints/TransferListEndpointsContainer";
import TransferListMethodsContainer from "../../transferList/TransferListMethods/TransferListMethodsContainer";
import ListComponentsContainer from "../../list/ListComponents/ListComponentsContainer";
import ButtonGeneratorContainer from "../../button/ButtonGenerator/ButtonGeneratorContainer";

const FormMain: React.FC<FormMainProps> = ({ onFileChange }) => {
  const { fileData } = useGeneratorContext();
  const { Form, Paper } = components;

  return (
    <Paper variant="elevation" elevation={2}>
      <Form>
        <InputFile onFileChange={onFileChange} />
        {fileData && (
          <>
            <TransferListEndpointsContainer />
            <TransferListMethodsContainer />
            <ListComponentsContainer />
            <ButtonGeneratorContainer />
          </>
        )}
      </Form>
    </Paper>
  );
};

export default FormMain;
