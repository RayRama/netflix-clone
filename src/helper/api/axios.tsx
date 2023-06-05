import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";

const URL = "http://192.168.249.58:8080/";

export default axios.create({
  baseURL: URL,
});

export const axiosPrivate = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SecureStore.getItemAsync("token")}`,
  },
  withCredentials: true,
});
