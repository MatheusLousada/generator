import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";
import AbstractGenerator from "../AbstractGenerator";

class TextFieldGenerator extends AbstractGenerator {
  constructor(
    type: string,
    endpoints: ComponentsEndpoints[],
    count: number
  ) {
    super(type, endpoints, count);
    super.setParameters(this.getParameters());
  }

  getParameters(): string[] {
    return ["textFields"];
  }

  generateView(): string {
    return `
import * as React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

interface TextFieldProps {
  textFields: any[];
}

export default function ${this.type}${this.count}({textFields}: TextFieldProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {textFields && textFields.map((textField) => {
        <TextField id="" label="" variant="" />
      })}
    </Box>
  );
}`;
  }
}

export default TextFieldGenerator;
