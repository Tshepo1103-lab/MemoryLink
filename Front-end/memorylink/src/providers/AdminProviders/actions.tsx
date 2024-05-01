import { createAction } from "redux-actions";
import { IAdminResponse, IAdminStateContext } from "./context";

export enum AdminActionEnum {
 
  regiserAdminRequest = "REGISTER_REQUEST",
  registerAdminSuccess = "REGISTER_SUCCESS",
  registerAdminError = "REGISTER_ERROR",

  getallAdminRequest = "GETADMINS_REQUEST",
  getallAdminSuccess = "GETADMINS_SUCCESS",
  getallAdminError = "GETADMINS_ERROR",

}



export const registerAdminAction = createAction<IAdminStateContext>(
  AdminActionEnum.regiserAdminRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const regiserAdminResponse = createAction<
  IAdminStateContext,
  IAdminResponse
>(AdminActionEnum.registerAdminSuccess, (AdminRegister) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  AdminRegister,
}));

export const registerAdminError = createAction<IAdminStateContext>(
  AdminActionEnum.registerAdminError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);


export const getAdminsRequest = createAction<IAdminStateContext>(
    AdminActionEnum.getallAdminRequest,
    () => ({ isPending: true, isError: false, isSuccess: false }),
  );
  
  export const getAdminsSuccess = createAction<
    IAdminStateContext,
    IAdminResponse[]
  >(AdminActionEnum.registerAdminSuccess, (Admins) => ({
    isPending: false,
    isError: false,
    isSuccess: true,
    Admins
  }));
  
  export const getAdminsError = createAction<IAdminStateContext>(
    AdminActionEnum.getallAdminError,
    () => ({ isPending: false, isError: true, isSuccess: false }),
  );
  
