// import axios from "axios";
// import * as SecureStore from "expo-secure-store";
// import { API_URL } from "@env";

import axios from "axios";

// const URL = "http://192.168.0.7:8080/";
// // const URL = "http://10.200.21.137:8080/";

// export default axios.create({
//   baseURL: URL,
// });

// export const axiosPrivate = axios.create({
//   baseURL: URL,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${SecureStore.getItemAsync("token")}`,
//   },
//   withCredentials: true,
// });

interface IAxiosClient {
  instance: any;
  URL: string;
  setTokenHeader: (token: string) => void;
  clearTokenHeader: () => void;
  getInstace: () => any;
}

export class AxiosClient implements IAxiosClient {
  private instance: any;
  // create private variable url with string type and the value is "http//localhost:8080/"
  private URL: string = "http://192.168.64.58:8080/";

  constructor() {
    this.instance = axios.create({
      baseURL: this.URL,
    });
  }

  setTokenHeader(token: string): void {
    try {
      this.instance.defaults.headers.common["token"] = `Bearer ${token}`;
      this.token = `Bearer ${token}`;
    } catch (err) {
      return err;
    }
  }

  clearTokenHeader(): void {
    try {
      this.instance.defaults.headers.common["token"] = "";
    } catch (err) {
      return err;
    }
  }

  public getInstace() {
    return this.instance;
  }
}

export class PublicAxiosClient {
  private instance: any;
  // create private variable url with string type and the value is "http//localhost:8080/"
  private URL: string = "http://192.168.64.58:8080/";

  constructor() {
    this.instance = axios.create({
      baseURL: this.URL,
    });
  }

  public getInstace() {
    return this.instance;
  }
}
