import { createAction } from "redux-actions";
import { IHospital, IHospitalStateContext } from "./context";
import create from "@ant-design/icons/lib/components/IconFont";

export enum HospitalActionEnum {
  getAllHospitalRequest = "GET_HOSPITALS",
  getAllHospitalSuccess = "GET_HOSPITAL_SUCCESS",
  getAllHospitalError = "GET_HOSPITAL_ERROR",

  addHospitalRequest = "ADD_HOSPITALS",
  addHospitalSuccess = "ADD_HOSPITAL_SUCCESS",
  addHospitalError = "ADD_HOSPITAL_ERROR",

  updateHospitalRequest = "UPDATE_HOSPITALS",
  updateHospitalSuccess = "UPDATE_HOSPITAL_SUCCESS",
  updateHospitalError = "UPDATE_HOSPITAL_ERROR",

  deleteHospitalRequest = "DELETE_HOSPITALS",
  deleteHospitalSuccess = "DELETEE_HOSPITAL_SUCCESS",
  deleteHospitalError = "DELETE_HOSPITAL_ERROR",
}

export const getallhospitalRequest = createAction<IHospitalStateContext>(
  HospitalActionEnum.getAllHospitalRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const getallhospitalResponse = createAction<
  IHospitalStateContext,
  IHospital[]
>(HospitalActionEnum.getAllHospitalSuccess, (hospitals) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  hospitals,
}));
export const getAllhospitalError = createAction<IHospitalStateContext>(
  HospitalActionEnum.getAllHospitalError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);

export const addhospitalRequest = createAction<IHospitalStateContext>(
  HospitalActionEnum.addHospitalRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const addhospitalSuccess = createAction<IHospitalStateContext>(
  HospitalActionEnum.addHospitalSuccess,
  () => ({ isPending: false, isError: false, isSuccess: true }),
);
export const addhospitalError = createAction<IHospitalStateContext>(
  HospitalActionEnum.addHospitalError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);

export const updatehospitalRequest = createAction<IHospitalStateContext>(
  HospitalActionEnum.updateHospitalRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const updatehospitalSuccess = createAction<IHospitalStateContext>(
  HospitalActionEnum.updateHospitalSuccess,
  () => ({ isPending: false, isError: false, isSuccess: true }),
);
export const updatehospitalError = createAction<IHospitalStateContext>(
  HospitalActionEnum.updateHospitalError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);

export const deletehospitalRequest = createAction<IHospitalStateContext>(
  HospitalActionEnum.updateHospitalRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const deletehospitalSuccess = createAction<IHospitalStateContext>(
  HospitalActionEnum.updateHospitalSuccess,
  () => ({ isPending: false, isError: false, isSuccess: true }),
);
export const deletehospitalError = createAction<IHospitalStateContext>(
  HospitalActionEnum.updateHospitalError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
