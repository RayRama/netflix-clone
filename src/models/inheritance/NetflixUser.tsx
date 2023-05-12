import { Content } from "@models/abstract/Content";
import { Subscription } from "@models/abstract/Subscription";
import { User } from "@models/abstract/User";
import { useAtom } from "jotai";
import { NetflixUserAtom } from "@store/";

export class NetflixUser extends User {
  password: string;
  private _subscription: Subscription;
  public isSubs: boolean;

  mylist: Content[];

  constructor(name: string, email: string, password: string) {
    super(name, email);
    this.password = password;
    this.mylist = [];
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

  login(password: string): boolean {
    if (password === this.password) {
      console.log(`User ${this.getUsername()} has logged in.`);
      return true;
    } else {
      console.log(`Invalid password.`);
      return false;
    }
  }

  logout() {
    alert(`User ${this.getUsername()} has logged out.`);
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
