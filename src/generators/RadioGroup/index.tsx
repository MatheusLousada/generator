import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";
import AbstractGenerator from "../AbstractGenerator";

class RadioGroupGenerator extends AbstractGenerator {
  constructor(
    type: string,
    endpoints: ComponentsEndpoints[],
    count: number
  ) {
    super(type, endpoints, count);
    super.setParameters(this.getParameters());
  }

  getParameters(): string[] {
    return ['selectedValue', 'handleChange', 'options', 'slabel'];
  }

  generateView(): string {
    return `
import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

interface RadioGroupProps {
  selectedValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
  label: string;
}


export default function ${this.type}${this.count}({ selectedValue, handleChange, options, label }: RadioGroupProps) {
  return (
    <FormControl>
      <FormLabel id="${this.type}-${this.count}-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="${this.type}-${this.count}-label"
        value={selectedValue}
        name="${this.type}-${this.count}-group"
        onChange={handleChange}
      >
        {options && options.map((option) => {
            <FormControlLabel key={} value="" control={<Radio />} label="" />
        })}
      </RadioGroup>
    </FormControl>
  );
}`;
  }
}

export default RadioGroupGenerator;
