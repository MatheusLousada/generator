import React from "react";
import { components } from "./styles";
import { FormRequestsProps } from "./interfaces/formRequests.interface";
import { FormLabel, Input } from "@mui/material";

const FormRequests: React.FC<FormRequestsProps> = ({ onInputChange }) => {
  const { Form, Paper } = components;

  return (
    <Paper variant="elevation" elevation={3}>
      <Form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <FormLabel htmlFor="baseURL" style={{marginRight: '1rem'}}>
            Informe o baseURL que será utilizado:
          </FormLabel>
          <Input
            type="text"
            id="baseURL"
            name="baseURL"
            onChange={onInputChange}
          />
        </div>
      </Form>
    </Paper>
  );
};

export default FormRequests;
