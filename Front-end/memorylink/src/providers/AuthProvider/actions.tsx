import { createAction } from "redux-actions";
import {
  ILoginResponse,
  INITIAL_STATE,
  IUserResponse,
  IUserStateContext,
} from "./context";

export enum UserActionEnum {
  loginUserRequest = "LOGIN_REQUEST",
  loginUserSuccess = "LOGIN_SUCCESS",
  loginUserError = "LOGIN_ERROR",
  logoutUserRequest = "LOGOUT",

  regiserUserRequest = "REGISTER_REQUEST",
  registerUserSuccess = "REGISTER_SUCCESS",
  registerUserError = "REGISTER_ERROR",
}

export const loginUserAction = createAction<IUserStateContext>(
  UserActionEnum.loginUserRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const loginSuccessAction = createAction<
  IUserStateContext,
  ILoginResponse
>(UserActionEnum.loginUserSuccess, (UserLogin) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  UserLogin,
}));

export const loginErrorAction = createAction<IUserStateContext>(
  UserActionEnum.loginUserError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);

export const logoutUserAction = createAction(
  UserActionEnum.logoutUserRequest,
  () => ({ ...INITIAL_STATE }),
);

export const registerUserAction = createAction<IUserStateContext>(
  UserActionEnum.loginUserRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const regiserUserResponse = createAction<
  IUserStateContext,
  IUserResponse
>(UserActionEnum.loginUserSuccess, (UserRegister) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  UserRegister,
}));
export const registerErrorAction = createAction<IUserStateContext>(
  UserActionEnum.registerUserError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
