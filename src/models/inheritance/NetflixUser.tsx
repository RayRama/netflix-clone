import { User } from "@models/abstract/User";
import { Content } from "@models/abstract/Content";
import { Subscription } from "@models/abstract/Subscription";

export class NetflixUser extends User {
  password: string;
  mylist: Content[];
  private isSubs: boolean;

  constructor(name: string, email: string, password: string) {
    super(name, email);
    this.password = password;
    // this.mylist = [];
  }

  subscribe(subscription: Subscription) {
    // this.subscription = subscription;

    if (this.isSubs) {
      console.log(`User ${this.getUsername()} has already subscribed.`);
      return;
    }

    this.setSubscribe(subscription);
    this.isSubs = true;
    console.log(
      `User ${this.getUsername()} has subscribed to ${subscription._name} plan.`
    );
  }

  unsubscribe() {
    if (this.isSubs) {
      console.log(`User ${this.getUsername()} has unsubscribed from plan.`);
      this.setSubscribe(null);
      this.isSubs = false;
    } else {
      console.log(`User ${this.name} has no subscription.`);
    }
  }

  login(password: string): boolean {
    if (password === this.password) {
      console.log(`User ${this.getUsername()} has logged in.`);
      this.setLoggedIn(true);
      return true;
    } else {
      this.setLoggedIn(false);
      console.log(`Invalid password.`);
      return false;
    }
  }

  logout() {
    console.log(`User ${this.name} has logged out.`);
    this.loggedIn = false;
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
