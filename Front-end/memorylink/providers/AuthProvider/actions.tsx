import { createAction } from "redux-actions";
import { ILoginResponse, IUserStateContext } from "./context";

export enum UserActionEnum {
  loginUserRequest = "LOGIN_REQUEST",
  loginUserSuccess = "LOGIN_SUCCESS",
  loginUserError = "LOGIN_ERROR",
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
