import axios, { AxiosInstance } from "axios";
import { API_HOST, API_KEY } from "../constants";
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: API_HOST,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.instance.interceptors.request.use(
      (config) => {
        config.url += `&appid=${API_KEY}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
