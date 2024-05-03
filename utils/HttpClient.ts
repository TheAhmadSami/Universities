/* eslint-disable no-alert */
import axios from "axios";

let baseUrl = "http://universities.hipolabs.com";
export const HttpClient = axios.create({
  baseURL: baseUrl,
  timeout: 60 * 1 * 1000,
  withCredentials: false,
});

HttpClient.interceptors.request.use(async (config) => {
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";

  return config;
});

HttpClient.interceptors.response.use(
  async (response) => response,
  async (error) => {
    return Promise.reject(error?.response?.data);
  }
);
