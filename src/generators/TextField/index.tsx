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
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ${this.type}_${this.count}({textFields}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {textFields.map((textField) => {
        <TextField id="{textField.id}" label="{textField.label}" variant="{textField.variant}" />
      })}
    </Box>
  );
}`;
  }
}

export default TextFieldGenerator;
