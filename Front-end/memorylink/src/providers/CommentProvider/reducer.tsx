import { handleActions } from "redux-actions";
import { CommentActionEnum } from "./actions";
import { INITIAL_STATE, ICommentStateContext } from "./context";

export const commentReducer = handleActions<
  ICommentStateContext,
  ICommentStateContext
>(
  {
    [CommentActionEnum.createCommentRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CommentActionEnum.createCommentSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CommentActionEnum.createCommentError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [CommentActionEnum.getCommentRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CommentActionEnum.getCommentSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CommentActionEnum.getCommentError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
