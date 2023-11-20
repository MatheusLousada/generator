import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";
import AbstractGenerator from "../AbstractGenerator";

class ButtonGenerator extends AbstractGenerator {
  constructor(
    type: string,
    endpoints: ComponentsEndpoints[],
    count: number
  ) {
    super(type, endpoints, count);
    super.setParameters(this.getParameters());
  }

  getParameters(): string[] {
    return ['buttonText', 'buttonVariants'];
  }

  generateView(): string {
    return `
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ${this.type}_${this.count}({ buttonText, buttonVariants }) {
  return (
    <Stack spacing={2} direction="row">
      {buttonText.map((text, index) => (
        <Button key={index} variant={buttonVariants[index]}>
          {text}
        </Button>
      )}
    </Stack>
  );
}`;
  }
}

export default ButtonGenerator;
