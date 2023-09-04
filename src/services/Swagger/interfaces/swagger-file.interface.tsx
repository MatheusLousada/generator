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

interface ParameterSchema {
  type: string;
  format?: string;
  minimum?: number;
  maximum?: number;
}

interface Parameter {
  name: string;
  in: string;
  description: string;
  required?: boolean;
  style?: string;
  explode?: boolean;
  schema: ParameterSchema;
}

interface ResponseContentSchema {
  type: string;
  items: {
    $ref: string;
  };
}

interface ResponseContent {
  schema: ResponseContentSchema;
}

interface Response {
  description: string;
  content?: {
    [key: string]: ResponseContent;
  };
}

interface GenericOperation {
  tags: string[];
  summary: string;
  description: string;
  operationId: string;
  parameters?: Parameter[];
  responses: {
    [key: string]: Response;
  };
}

interface PostOperation {
  tags: string[];
  summary: string;
  description: string;
  operationId: string;
  requestBody: RequestBody;
  responses: {
    [key: string]: Response;
  };
}

interface DeleteOperation {
  tags: string[];
  summary: string;
  description: string;
  operationId: string;
  parameters: Parameter[];
  responses: {
    [key: string]: Response;
  };
}

interface PutOperation {
  tags: string[];
  summary: string;
  description: string;
  operationId: string;
  parameters: Parameter[];
  requestBody: RequestBody;
  responses: {
    [key: string]: Response;
  };
}

interface RequestBodyContent {
  schema: {
    $ref: string;
  };
}

interface RequestBody {
  description: string;
  content: {
    [key: string]: RequestBodyContent;
  };
}

interface Method {
  get?: GenericOperation;
  post?: PostOperation;
  put?: PutOperation;
  delete?: DeleteOperation;
  head?: GenericOperation;
  options?: GenericOperation;
  trace?: GenericOperation;
}

interface Paths {
  [key: string]: Method;
}

interface Components {
  schemas: {};
}

interface SwaggerFile {
  openapi: string;
  info: {
    title: string;
    description: string;
    contact: Contact;
    license: License;
    version: string;
  };
  servers: Server[];
  tags: Tag[];
  paths: Paths;
  components: Components;
}

export type { SwaggerFile };
