import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  FileData,
  FormData,
  GeneratorContextData,
} from "./interfaces/generator.interface";
import { componentsList } from "./componentsList";

const GeneratorContext = createContext<GeneratorContextData | undefined>(
  undefined
);

export const GeneratorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialFormData: FormData = {
    request: {
      baseURL: "",
      accessToken: "",
    },
    endpoints: [],
    selectedComponents: [],
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [fileData, setFileData] = useState<FileData | null>(null);

  return (
    <GeneratorContext.Provider
      value={{ formData, setFormData, fileData, setFileData, componentsList }}
    >
      {children}
    </GeneratorContext.Provider>
  );
};

export const useGeneratorContext = () => {
  const context = useContext(GeneratorContext);
  if (!context) {
    throw new Error(
      "useGeneratorContext: O contexto GeneratorContext não foi encontrado. Certifique-se de que seu componente está envolvido pelo GeneratorProvider."
    );
  }
  return context;
};
