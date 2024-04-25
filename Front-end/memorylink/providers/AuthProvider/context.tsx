import { createContext } from "react";

export const INITIAL_STATE: IUserStateContext={
    isPending:false,
    isSuccess:false,
    isError:false,
    UserLogin:undefined
}

export interface ILoginRequest{
    userNameOrEmailAddress?: string;
    password?: string;  
}

export interface ILoginResponse{

    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
    role:string;
}


export interface IUserStateContext{

    isPending?:Boolean;
    isSuccess?:Boolean;
    isError?:Boolean;
    UserLogin?:ILoginResponse;
    
}

export interface IUserActionContext{

    login?:(payload:ILoginRequest) => void;
}

const UserStateContext=createContext<IUserStateContext>(INITIAL_STATE);

const UserActionContext=createContext<IUserActionContext>(undefined)

export { UserActionContext,UserStateContext}