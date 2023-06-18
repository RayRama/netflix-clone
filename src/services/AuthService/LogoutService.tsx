import { AxiosClient } from "@helper/api/axios";
import { SecureStorageService } from "@services/SecureStorageService";

export class LogoutService {
  private axiosClient: AxiosClient;
  private storageService: SecureStorageService;

  constructor() {
    this.axiosClient = new AxiosClient();
    this.storageService = new SecureStorageService();
  }

  async logout(): Promise<void> {
    try {
      await this.storageService.deleteItem("token");
      await this.axiosClient.clearTokenHeader();
      await this.storageService.deleteItem("user");
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
