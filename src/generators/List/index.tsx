import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";

const ListGenerator = {
  generateListContainer: (
    type: string,
    counter: number,
    endpoints: ComponentsEndpoints[]
  ) => {
    let id, idContainer;
    let response: string = "";

    response = `
import React, { useEffect, useState } from "react";`;

    endpoints.forEach((e) => {
      const cleanedEndpoint =
        e && e.endpoint ? e.endpoint.replace(/{[^}]+}/g, "") : "";
      const words = cleanedEndpoint
        .split("/")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      const result = words.join("");
      id = type + result + `_${counter}`;
      idContainer = type + result + `Container_${counter}`;
    });

    response += `

export default function ${idContainer}() {
  return <${id} />;
}`;

    return response;
  },

  generateList: (id: string, counter: number,) => {
    return `
import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

export default function ${id}_${counter}({ items }) {
  return (
    <div>
      <h2>Lista de Itens</h2>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
      `;
  },

  generateRequest: (endpoints: ComponentsEndpoints[], baseURL: string) => {
    let response = `
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: '${baseURL}',
});`;

    endpoints.forEach((e) => {
      const cleanedEndpoint =
        e && e.endpoint ? e.endpoint.replace(/{[^}]+}/g, "") : "";
      const words = cleanedEndpoint
        .split("/")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      const method =
        e && e.method
          ? e.method.charAt(0).toUpperCase() + e.method.slice(1)
          : "";
      const result = words.join("") + method;
      response =
        response +
        `

export const fetch${result} = async () => {
  try {
    const response = await axiosInstance.${e.method}("${e.endpoint}");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Erro na requisição fetch${result}:", error);
  }
};`;
    });

    return response;
  },
};

export default ListGenerator;
