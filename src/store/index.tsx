import { Subscription } from "@models/abstract/Subscription";
import { atom } from "jotai";

interface IUser {
  email: string;
  username: string;
  password: string;
  subscription: Subscription;
  isLogged: boolean;
  myList: any[];
}

const initialUser: IUser = {
  email: "",
  username: "",
  password: "",
  subscription: null,
  isLogged: false,
  myList: [],
};

const NetflixUserAtom = atom<IUser>(initialUser);
