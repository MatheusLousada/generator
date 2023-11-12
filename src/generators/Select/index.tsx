import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";
import AbstractGenerator from "../AbstractGenerator";

class SelectGenerator extends AbstractGenerator {
  constructor(
    type: string,
    endpoints: ComponentsEndpoints[],
    baseURL: string,
    count: number
  ) {
    super(type, endpoints, baseURL, count);
    super.setParameters(this.getParameters());
  }

  getParameters(): string[] {
    return ["selectedValue", "handleChange", "label", "options"];
  }

  generateView(): string {
    return `
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ${this.type}_${this.count}({ selectedValue, handleChange, label, options }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="${this.type}_${this.count}-label">{label}</InputLabel>
        <Select
          labelId="${this.type}_${this.count}-label"
          id="${this.type}_${this.count}"
          value={selectedValue}
          label="{label}"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem value={{option.value}}>{option.label}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}`;
  }
}

export default SelectGenerator;
