import { ComponentsEndpoints } from "../../contexts/interfaces/generator.interface";

abstract class AbstractGenerator {
  type: string;
  endpoints: ComponentsEndpoints[];
  baseURL: string;
  count: number;
  parameters: string[] = [];

  constructor(
    type: string,
    endpoints: ComponentsEndpoints[],
    baseURL: string,
    count: number
  ) {
    this.type = type;
    this.endpoints = endpoints;
    this.baseURL = baseURL;
    this.count = count;
  }

  abstract generateView(): string;

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
    const view = `${this.type}_${this.count}`;
    const idContainer = this.type + `Container_${this.count}`;
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
import axios from "axios";
import { axiosInstance, authToken } from "./AxiosConsts";`;

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
export const fetch${result} = async () => {
  try {
    const payload = {};
    const response = await axiosInstance.${e.method}("${e.endpoint}", payload ?? null, {
      headers: {
        Authorization: \`Bearer \${authToken}\`,
      },
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
