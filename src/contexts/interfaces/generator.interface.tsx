import { Dispatch, SetStateAction } from "react";

interface Contact {
  email: string;
}

interface License {
  name: string;
  url: string;
}

interface Server {
  url: string;
  description: string;
}

interface Tag {
  name: string;
  description: string;
}

interface Info {
  contact: Contact;
  description: string;
  license: License;
  title: string;
  version: string;
}

interface FileData {
  openapi: string;
  info: Info;
  servers: Server[];
  tags: Tag[];
  paths: {
    [key: string]: Path;
  };
  components: {
    schemas: {};
  };
}

interface HttpMethod {
  [methodName: string]: any;
}

interface Path {
  [path: string]: HttpMethod;
}

interface Endpoints {
  endpoint?: string;
  methods?: { [key: string]: Path };
  selectedMethods?: string[];
}

interface ComponentsEndpoints {
  id?: number;
  endpoint?: string;
  method?: string;
}

interface Components {
  type?: string;
  amount?: number;
  endpoints?: ComponentsEndpoints[];
}

interface FormData {
  selectedEndpoints: Endpoints[];
  selectedComponents: Components[];
}

interface GeneratorContextData {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  fileData: FileData | null;
  setFileData: Dispatch<SetStateAction<FileData | null>>;
  componentsList: string[];
}

export type { FileData, FormData, GeneratorContextData, Endpoints, Components };
