class AxiosGenerator {
  baseURL: string;
  accessToken: string;

  constructor(
    accessToken: string,
    baseURL: string,
  ) {
    this.accessToken = accessToken;
    this.baseURL = baseURL;
  }

  generateContent(): string {
    const response = `
import axios from "axios";

const BASE_URL = "${this.baseURL}";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const authToken = "${this.accessToken}"; 

export { axiosInstance, authToken };`;

    return response;
  }
}

export default AxiosGenerator;
