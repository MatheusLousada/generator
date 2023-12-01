import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";
import AbstractGenerator from "../AbstractGenerator";

class SelectGenerator extends AbstractGenerator {
  constructor(
    type: string,
    endpoints: ComponentsEndpoints[],
    count: number
  ) {
    super(type, endpoints, count);
    super.setParameters(this.getParameters());
  }

  getParameters(): string[] {
    return ["selectedValue", "handleChange", "label", "options"];
  }

  generateView(): string {
    return `
import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

interface ComponentsEndpoints {
  value: string;
  label: string;
}

export interface SelectGeneratorProps {
  type: string;
  endpoints: ComponentsEndpoints[];
  count: number;
}

export default function ${this.type}${this.count}({ selectedValue, handleChange, label, options }: SelectGeneratorProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="${this.type}-${this.count}-label">{label}</InputLabel>
        <Select
          labelId="${this.type}-${this.count}-label"
          id="${this.type}-${this.count}"
          value={selectedValue}
          label="{label}"
          onChange={handleChange}
        >
          {options && options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}`;
  }
}

export default SelectGenerator;
