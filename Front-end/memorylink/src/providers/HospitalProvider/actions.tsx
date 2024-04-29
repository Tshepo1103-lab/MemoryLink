import { createAction } from "redux-actions";
import { IHospitalResponse, IHospitalStateContext } from "./context";

export enum HospitalActionEnum {
  getAllHospitalRequest = "GET_HOSPITALS",
  getAllHospitalSuccess = "GET_HOSPITAL_SUCCESS",
  getAllHospitalError = "GET_HOSPITAL_ERROR",
}

export const getallhospitalRequest = createAction<IHospitalStateContext>(
  HospitalActionEnum.getAllHospitalRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);
export const getallhospitalResponse = createAction<
  IHospitalStateContext,
  IHospitalResponse
>(HospitalActionEnum.getAllHospitalSuccess, (GetAllHospital) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  GetAllHospital,
}));
export const getAllhospitalError = createAction<IHospitalStateContext>(
  HospitalActionEnum.getAllHospitalError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
