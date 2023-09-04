import React from "react";
import { FormMainProps } from "./interfaces/FormMainProps.interface";
import { components } from "./styles";
import InputFile from "../../inputs/InputFile";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";
import TransferListEndpointsContainer from "../../transferList/TransferListEndpoints/TransferListEndpointsContainer";
import TransferListMethodsContainer from "../../transferList/TransferListMethods/TransferListMethodsContainer";

const FormMain: React.FC<FormMainProps> = ({ onInputChange, onFileChange }) => {
  const { fileData, formData } = useGeneratorContext();
  const { Form, Paper } = components;

  return (
    <Paper variant="elevation" elevation={2}>
      <Form>
        <InputFile onFileChange={onFileChange} />
        {fileData ? <TransferListEndpointsContainer /> : null}
        {fileData ? <TransferListMethodsContainer /> : null}
      </Form>
    </Paper>
  );
};

export default FormMain;
