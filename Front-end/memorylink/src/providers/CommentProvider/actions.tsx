import { createAction } from "redux-actions";
import { ICommentResponse, ICommentStateContext } from "./context";

export enum CommentActionEnum {
  createCommentRequest = "COMMENT_REQUEST",
  createCommentSuccess = "COMMENT_SUCCESS",
  createCommentError = "COMMENT_ERROR",

  getCommentRequest = "GET_COMMENT_REQUEST",
  getCommentSuccess = "GET_COMMENT_SUCCESS",
  getCommentError = "GET_COMMENT_ERROR",
}

export const createCommentAction = createAction<ICommentStateContext>(
  CommentActionEnum.createCommentRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const createCommentSuccess = createAction<ICommentStateContext>(
  CommentActionEnum.createCommentSuccess,
  () => ({
    isPending: false,
    isError: false,
    isSuccess: true,
  }),
);

export const createCommentError = createAction<ICommentStateContext>(
  CommentActionEnum.createCommentError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);

export const getCommentAction = createAction<ICommentStateContext>(
  CommentActionEnum.getCommentRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const getCommentSuccess = createAction<
  ICommentStateContext,
  ICommentResponse[]
>(CommentActionEnum.getCommentSuccess, (comments) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  comments,
}));

export const getCommentError = createAction<ICommentStateContext>(
  CommentActionEnum.getCommentError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
