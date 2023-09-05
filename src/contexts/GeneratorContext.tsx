import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  FileData,
  FormData,
  GeneratorContextData,
} from "./interfaces/generator.interface";

const GeneratorContext = createContext<GeneratorContextData | undefined>(
  undefined
);

export const GeneratorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialFormData: FormData = {
    selectedEndpoints: [],
    selectedComponents: [],
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [fileData, setFileData] = useState<FileData | null>(null);

  return (
    <GeneratorContext.Provider
      value={{ formData, setFormData, fileData, setFileData }}
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
