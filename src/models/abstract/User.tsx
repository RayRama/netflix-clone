import { Content } from "./Content";
import { Subscription } from "./Subscription";

export abstract class User {
  private _name: string;
  private _email: string;

  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }

  abstract subscribe(): void;
  abstract unsubscribe(): void;
  abstract login(): void;
  abstract logout(): void;
  abstract addToMyList(): void;
  abstract removeFromMyList(): void;

  // getter
  getUsername() {
    return this._name;
  }

  getEmail() {
    return this._email;
  }
}
