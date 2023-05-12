import { Subscription } from "@models/abstract/Subscription";
import { atom } from "jotai";

interface IUser {
  email: string;
  username: string;
  password: string;
  subscription: Subscription;
  loggedIn: boolean;
  myList: any[];
}

const initialUser: IUser = {
  email: "",
  username: "",
  password: "",
  subscription: null,
  loggedIn: false,
  myList: [],
};

export const NetflixUserAtom = atom<IUser>(initialUser);
