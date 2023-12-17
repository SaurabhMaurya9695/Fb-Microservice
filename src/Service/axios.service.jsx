import axios from "axios";
import { APIGATEWAY_BASE_URL, JWT_BASE_URL, USER_BASE_URL } from "./helper.service";
import { useSelector } from "react-redux";

export const publicAxios = axios.create({
  baseURL: USER_BASE_URL,
});

export const gatewayAxios = axios.create({
  baseURL: APIGATEWAY_BASE_URL,
});

export const jwtAxios = axios.create({
  baseURL: JWT_BASE_URL,
});

//using interceptor .. adding jwtToken in every request as header
export const privateAxios = axios.create({
  baseURL: APIGATEWAY_BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = useSelector((state)=> state.token)
    if (token) {
        console.log(config.headers.common)
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);