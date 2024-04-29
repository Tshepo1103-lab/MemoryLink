import { handleActions } from "redux-actions";
import { HospitalActionEnum } from "./actions";
import { IHospitalStateContext, INITIAL_STATE } from "./context";

export const hospitalReducer = handleActions<
  IHospitalStateContext,
  IHospitalStateContext
>(
  {
    [HospitalActionEnum.getAllHospitalRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [HospitalActionEnum.getAllHospitalSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [HospitalActionEnum.getAllHospitalError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
