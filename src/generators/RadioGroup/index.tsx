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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ${this.type}${this.count}({ selectedValue, handleChange, options, label }) {
  return (
    <FormControl>
      <FormLabel id="${this.type}-${this.count}-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="${this.type}-${this.count}-label"
        value={selectedValue}
        name="${this.type}-${this.count}-group"
        onChange={handleChange}
      >
        {options.map((option) => {
            <FormControlLabel value="" control={<Radio />} label="" />
        })}
      </RadioGroup>
    </FormControl>
  );
}`;
  }
}

export default RadioGroupGenerator;
