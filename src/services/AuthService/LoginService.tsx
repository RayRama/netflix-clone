import { AxiosClient } from "@helper/api/axios";
import { SecureStorageService } from "@services/SecureStorageService";

export class LoginService {
  private axiosClient: AxiosClient;
  private storageService: SecureStorageService;

  constructor() {
    this.axiosClient = new AxiosClient();
    this.storageService = new SecureStorageService();
  }

  async login(username: string, password: string): Promise<void> {
    try {
      const res = await this.axiosClient.getInstace().post("api/auth/login", {
        username: username,
        password: password,
      });

      await this.storageService.setItem("token", res.data.accessToken);

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
