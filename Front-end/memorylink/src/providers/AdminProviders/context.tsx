import { createContext } from "react";

export const INITIAL_STATE: IAdminStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  Admin:undefined,
  Admins:undefined, 
};

export interface IAdminRequest{
    name: string;
    surname: string;
    isActive: Boolean;
    userName: string;
    emailAddress: string;
    roleNames?: string[];
    password?: string;
}

export interface IAdminResponse{
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

export interface IAdminStateContext {
  isPending: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
  Admin?: IAdminResponse;
  Admins?:IAdminResponse[];
  
}

export interface IAdminActionContext {
    adminregister?: (payload:IAdminRequest) => void;
    getalladmins?: () => void;
    deleteadmin?: (id:string) => void;
    updateadmin?: (payload:IAdminRequest) => void;
}

export const AdminStateContext =
  createContext<IAdminStateContext>(INITIAL_STATE);

export const AdminActionContext =
  createContext<IAdminActionContext>(undefined);