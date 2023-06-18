import { Subscription } from "@models/abstract/Subscription";
import { atom } from "jotai";

interface IUser {
  email: string;
  username: string;
  password: string;
  subscription: Subscription;
  myList: any[];
}

interface IAuth {
  token: string;
  authenticated: boolean;
}

const initialUser: IUser = {
  email: "",
  username: "",
  password: "",
  subscription: null,
  myList: [],
};

const initialAuth: IAuth = {
  token: null,
  authenticated: false,
};

export const NetflixUserAtom = atom<IUser>(initialUser);

export const isLoadingAtom = atom<boolean>(false);

export const AuthAtom = atom<IAuth>(initialAuth);
