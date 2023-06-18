import { Content } from "@models/abstract/Content";
import { Subscription } from "@models/abstract/Subscription";
import { User } from "@models/abstract/User";
import { AuthService } from "@services/AuthService";

export class NetflixUser extends User {
  private _subscription: Subscription;
  private authService: AuthService;
  public isSubs: boolean;

  password: string;
  mylist: Content[];

  constructor() {
    super();
    this.authService = new AuthService();
    this.mylist = [];
  }

  constructor(name: string, email: string, password: string) {
    super(name, email);
    this.password = password;
    this.mylist = [];
    this.authService = new AuthService();
  }

  subscribe(subs: Subscription): void {
    this._subscription = subs;
    alert(`You have successfully subscribed to ${subs.getName()} Plan.`);
  }

  getSubscription() {
    return this._subscription;
  }

  unsubscribe() {
    this._subscription = null;
    alert(`You have successfully unsubscribed.`);
  }

  async register(
    username: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      const res = await this.authService.register(username, email, password);

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async login(username: string, password: string): Promise<void> {
    try {
      const res = await this.authService.login(username, password);
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async logout(): Promise<void> {
    try {
      alert(`User ${this.getUsername()} has logged out.`);
      await this.authService.logout();
      return Promise.resolve(true);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  addToMyList(content: Content) {
    if (this.loggedIn) {
      if (!this.mylist.includes(content)) {
        this.mylist.push(content);
        console.log(`${content.title} has been added to my list.`);
      } else {
        console.log(`${content.title} is already in my list.`);
      }
    } else {
      console.log(`You need to be logged in to add content to your list.`);
    }
  }

  removeFromMyList(content: Content) {
    if (this.loggedIn) {
      const index = this.mylist.indexOf(content);
      if (index !== -1) {
        this.mylist.splice(index, 1);
        console.log(`${content.title} has been removed from my list.`);
      } else {
        console.log(`${content.title} is not in my list.`);
      }
    } else {
      console.log(`You need to be logged in to remove content from your list.`);
    }
  }
}
