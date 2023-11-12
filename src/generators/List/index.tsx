import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";
import AbstractGenerator from "../AbstractGenerator";

class ListGenerator extends AbstractGenerator {
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
    return ['items'];
  }

  generateView(): string {
    return `
import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

export default function ${this.type}_${this.count}({ items }) {
  return (
    <div>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}`;
  }
}

export default ListGenerator;
