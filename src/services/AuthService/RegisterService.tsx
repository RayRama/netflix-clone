import { PublicAxiosClient } from "@helper/api/axios";

export class RegisterService {
  private axiosClient: PublicAxiosClient;

  constructor() {
    this.axiosClient = new PublicAxiosClient();
  }

  async register(
    username: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      const res = await this.axiosClient
        .getInstace()
        .post("api/auth/register", {
          username: username,
          email: email,
          password: password,
        });

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
