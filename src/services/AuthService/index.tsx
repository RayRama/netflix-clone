import { LoginService } from "./LoginService";
import { LogoutService } from "./LogoutService";
import { RegisterService } from "./RegisterService";

interface IAuthService {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: () => Promise<void>;
}

export class AuthService implements IAuthService {
  private loginService: LoginService;
  private logoutService: LogoutService;
  private registerService: RegisterService;

  constructor() {
    this.loginService = new LoginService();
    this.logoutService = new LogoutService();
    this.registerService = new RegisterService();
  }

  async login(username: string, password: string): Promise<void> {
    try {
      const res = await this.loginService.login(username, password);
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.logoutService.logout();
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async register(): Promise<void> {
    try {
      await this.registerService.register();
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
