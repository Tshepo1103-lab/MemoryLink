import { handleActions } from "redux-actions";
import { UserActionEnum } from "./actions";
import { INITIAL_STATE, IUserStateContext } from "./context";

export const userReducer = handleActions<IUserStateContext, IUserStateContext>(
  {
    [UserActionEnum.loginUserRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionEnum.loginUserSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionEnum.loginUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [UserActionEnum.logoutUserRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionEnum.regiserUserRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionEnum.registerUserSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionEnum.registerUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [UserActionEnum.getUserRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionEnum.getUserSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserActionEnum.getrUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
