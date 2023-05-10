import { Content } from "./Content";
import { Subscription } from "./Subscription";

export abstract class User {
  private _name: string;
  private _email: string;
  private _subscription: Subscription;
  loggedIn: boolean;

  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
    this.loggedIn = false;
  }

  abstract subscribe(subscription: Subscription): void;
  abstract unsubscribe(): void;
  abstract login(password: string): boolean;
  abstract logout(): void;
  abstract addToMyList(content: Content): void;
  abstract removeFromMyList(content: Content): void;

  // setter
  setSubscribe(subscribe: Subscription) {
    this._subscription = subscribe;
  }

  setLoggedIn(status: boolean) {
    this.loggedIn = status;
  }

  // getter
  getUsername() {
    return this._name;
  }
}
