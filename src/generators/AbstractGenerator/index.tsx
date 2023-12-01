import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";

abstract class AbstractGenerator {
  type: string;
  endpoints: ComponentsEndpoints[];
  count: number;
  parameters: string[] = [];

  constructor(
    type: string,
    endpoints: ComponentsEndpoints[],
    count: number
  ) {
    this.type = type;
    this.endpoints = endpoints;
    this.count = count;
  }

  abstract generateView(): string;
  abstract getParameters(): string[];

  protected setParameters(parameters: string[]): void {
    this.parameters = parameters;
  }

  private fillParameters(): string {
    const parameterAttributes = this.parameters.map((param) => {
      return `${param}={${param}}`;
    });

    return parameterAttributes.join(" ");
  }

  public generateContainer(): string {
    const view = `${this.type}${this.count}`;
    const idContainer = this.type + `Container${this.count}`;
    const response: string = `
import React, { useEffect, useState } from "react";
import ${view} from "./${view}";

export default function ${idContainer}() {
  return <${view} ${this.fillParameters()} />;
}`;
    return response;
  }

  public generateRequest(): string {
    let response = `
import { AxiosInstance } from "axios";

interface FetchParams {
  axios: AxiosInstance;
  payload?: any;
  authToken?: {};
}
`;

    this.endpoints.forEach((e) => {
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
export const fetch${result} = async ({ axios, payload, authToken }: FetchParams) => {
  try {
    const response = await axios.${e.method}("${e.endpoint}", {
      params: payload ?? null,
      headers: authToken ?? {},
    });

    return response.data;
  } catch (error) {
    console.error("Erro na requisição fetch${result}:", error);
  }
};`;
    });

    return response;
  }
}

export default AbstractGenerator;
