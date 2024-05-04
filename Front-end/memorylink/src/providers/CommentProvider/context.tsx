import { createContext } from "react";

export const INITIAL_STATE: ICommentStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  comment: undefined,
};

export interface ICommentRequest {
  message: string;
  userId: number;
  profileId: number;
}

export interface ICommentResponse {
  id?: string;
  message: string;
  dateSent: string;
  userId: number;
  profileId: number;
  user:{
    name:string;
    surname:string;
  }
}

export interface ICommentStateContext {
  isPending: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
  comment?: ICommentResponse;
  comments?: ICommentResponse[];
}

export interface ICommentActionContext {
  createcomment?: (payload: ICommentRequest) => void;
  getcomments?: (id: number) => void;
}

export const CommentStateContext =
  createContext<ICommentStateContext>(INITIAL_STATE);

export const CommentActionContext =
  createContext<ICommentActionContext>(undefined);
