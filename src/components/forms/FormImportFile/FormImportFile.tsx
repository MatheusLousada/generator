import React from "react";
import { FormImportFileProps } from "./interfaces/FormImportFileProps.interface";
import { components } from "./styles";
import InputFile from "../../inputs/InputFile";

const FormImportFile: React.FC<FormImportFileProps> = ({ onFileChange }) => {
  const { Form, Paper } = components;

  return (
    <Paper variant="elevation" elevation={0}>
      <Form>
        <InputFile onFileChange={onFileChange} />
      </Form>
    </Paper>
  );
};

export default FormImportFile;
