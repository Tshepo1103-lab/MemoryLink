import { createContext } from "react";

export const INITIAL_STATE: IUserStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  UserLogin: undefined,
  UserRegister: undefined,
  userDetails: undefined,
};

export interface IUser {
  id: string;
  userName: string;
  name: string;
  surname: string;
  phoneNumber: string;
  emailAddress: string;
}
export interface ILoginRequest {
  userNameOrEmailAddress?: string;
  password?: string;
}

export interface ILoginResponse {
  accessToken: string;
  encryptedAccessToken: string;
  expireInSeconds: number;
  role: string;
}

export interface IUserRequest {
  name: string;
  surname: string;
  isActive: Boolean;
  userName: string;
  emailAddress: string;
  roleNames?: string[];
  password?: string;
}

export interface IUserResponse {
  id: number;
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string;
  lastLoginTime: string;
  creationTime: string;
  roleNames?: string[];
}

export interface IUserStateContext {
  isPending?: Boolean;
  isSuccess?: Boolean;
  isError?: Boolean;
  UserLogin?: ILoginResponse;
  UserRegister?: IUserResponse;
  userDetails?: IUser;
}

export interface IUserActionContext {
  login?: (payload: ILoginRequest) => void;
  logout?: () => void;
  register?: (payload: IUserRequest) => void;
  getuserdetails?: () => void;
}

export const UserStateContext = createContext<IUserStateContext>(INITIAL_STATE);

export const UserActionContext = createContext<IUserActionContext>(undefined);
