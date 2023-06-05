import { Content } from "@models/abstract/Content";
import { Subscription } from "@models/abstract/Subscription";
import { User } from "@models/abstract/User";
import axios from "@helper/api/axios";
import * as SecureStore from "expo-secure-store";

export class NetflixUser extends User {
  password: string;
  private _subscription: Subscription;
  public isSubs: boolean;

  mylist: Content[];

  // constructor(name: string, email: string, password: string) {
  //   super(name, email);
  //   this.password = password;
  //   this.mylist = [];
  // }

  // constructor(name: string, password: string) {
  //   super(name);
  //   this.password = password;
  // }

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
      const res = await axios.post("api/auth/register", {
        username: username,
        email: email,
        password: password,
      });

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async login(username: string, password: string): Promise<void> {
    try {
      const res = await axios.post("api/auth/login", {
        username: username,
        password: password,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.accessToken}`;

      await SecureStore.setItemAsync("token", res.data.accessToken);
      await SecureStore.setItemAsync(
        "user",
        JSON.stringify({
          username: res.data.username,
          email: res.data.email,
        })
      );
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async logout(): Promise<void> {
    try {
      alert(`User ${this.getUsername()} has logged out.`);
      await SecureStore.deleteItemAsync("token");
      axios.defaults.headers.common["Authorization"] = "";
      await SecureStore.deleteItemAsync("user");
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
