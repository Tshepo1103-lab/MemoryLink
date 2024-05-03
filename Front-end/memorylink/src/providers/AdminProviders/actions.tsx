import { createAction } from "redux-actions";
import { IAdminResponse, IAdminStateContext } from "./context";

export enum AdminActionEnum {
  regiserAdminRequest = "REGISTER_REQUEST",
  registerAdminSuccess = "REGISTER_SUCCESS",
  registerAdminError = "REGISTER_ERROR",

  getallAdminRequest = "GETADMINS_REQUEST",
  getallAdminSuccess = "GETADMINS_SUCCESS",
  getallAdminError = "GETADMINS_ERROR",

  deleteAdminRequest = "DELETEADMIN_REQUEST",
  deleteAdminSuccess = "DELETEADMIN_SUCCESS",
  deleteAdminError = "DELETEADMIN_ERROR",

  updateAdminRequest = "UPDATEADMIN_REQUEST",
  updateAdminSuccess = "UPDATEADMIN_SUCCESS",
  updateAdminError = "UPDATEADMIN_ERROR",
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
  Admins,
}));

export const getAdminsError = createAction<IAdminStateContext>(
  AdminActionEnum.getallAdminError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);

export const DeleteAdminRequest = createAction<IAdminStateContext>(
  AdminActionEnum.deleteAdminRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const DeleteAdminSuccess = createAction<IAdminStateContext>(
  AdminActionEnum.deleteAdminSuccess,
  () => ({
    isPending: false,
    isError: false,
    isSuccess: true,
  }),
);

export const DeletAdminError = createAction<IAdminStateContext>(
  AdminActionEnum.deleteAdminError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);

export const UpdateAdminRequest = createAction<IAdminStateContext>(
  AdminActionEnum.updateAdminRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const UpdateAdminSuccess = createAction<IAdminStateContext>(
  AdminActionEnum.updateAdminSuccess,
  () => ({
    isPending: false,
    isError: false,
    isSuccess: true,
  }),
);

export const UpdateAdminError = createAction<IAdminStateContext>(
  AdminActionEnum.updateAdminError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
