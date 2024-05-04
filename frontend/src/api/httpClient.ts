import axios from "axios";

const BASE_URL = "http://localhost:3000/";


const httpClient = axios.create({
  baseURL: BASE_URL,
});
httpClient.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers["Content-Type"] = 'multipart/form-data';
      config.headers["Accept"] = "application/json";
      return config;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default httpClient;