import { useState } from "react";

function Extractor() {
  const extractEndpointsFromFile = (json: any) => {
    const endpoints: Record<string, string[]> = {};

    for (const pathKey in json.paths) {
      if (json.paths.hasOwnProperty(pathKey)) {
        const pathItem = json.paths[pathKey];
        extractMethods(pathItem, endpoints, pathKey);
      }
    }

    return endpoints;
  };

  const extractMethods = (
    pathItem: any,
    endpoints: Record<string, string[]>,
    pathKey: string
  ) => {
    const httpMethods = [
      "get",
      "post",
      "put",
      "delete",
      "head",
      "trace",
      "options",
    ];

    for (const methodKey in pathItem) {
      if (httpMethods.includes(methodKey)) {
        addToEndpoints(endpoints, pathKey, methodKey);
      }
    }
  };

  const addToEndpoints = (
    endpoints: Record<string, string[]>,
    path: string,
    method: string
  ) => {
    if (!endpoints[path]) {
      endpoints[path] = [];
    }
    endpoints[path].push(method);
  };
}

export default Extractor;
