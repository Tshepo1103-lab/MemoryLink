import { instance } from "@/utils/axiosInstance/axiosInstance";
import { message } from "antd";
import { useContext, useReducer } from "react";
import {
  createCommentAction,
  createCommentError,
  createCommentSuccess,
  getCommentAction,
  getCommentError,
  getCommentSuccess,
} from "./actions";
import {
  CommentActionContext,
  CommentStateContext,
  ICommentActionContext,
  ICommentRequest,
  ICommentStateContext,
  INITIAL_STATE,
} from "./context";
import { commentReducer } from "./reducer";

export const CommentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(commentReducer, INITIAL_STATE);

  const createcomment = async (payload: ICommentRequest) => {
    dispatch(createCommentAction());
    try {
      const endpoint = "api/services/app/Comment/CreateComment";
      const response = await instance.post(endpoint, payload);
      if (response.data.success) {
        dispatch(createCommentSuccess());
        message.success("Comment successfully created");
      }
    } catch (error) {
      console.error(error);
      dispatch(createCommentError());
    }
  };

  const getcomments = async (id: number) => {
    dispatch(getCommentAction());
    try {
      const endpoint = "api/services/app/Comment/GetAllCommentsById?profileId=";
      const response = await instance.get(`${endpoint + id}`);
      if (response.data.success) {
        dispatch(getCommentSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(getCommentError());
    }
  };

  return (
    <CommentStateContext.Provider value={state}>
      <CommentActionContext.Provider value={{ createcomment, getcomments }}>
        {children}
      </CommentActionContext.Provider>
    </CommentStateContext.Provider>
  );
};

export const useCommentState = () => {
  const context = useContext(CommentStateContext);
  if (!context) {
    throw new Error("useCommentState must be used within a CommentProvider");
  }
  return context;
};

export const useCommentActions = () => {
  const context = useContext(CommentActionContext);
  if (!context) {
    throw new Error("useCommentAction must be used within a CommentProvider");
  }
  return context;
};

export const useUser: any = (): ICommentStateContext &
  ICommentActionContext => {
  return {
    ...useCommentState(),
    ...useCommentActions(),
  };
};
