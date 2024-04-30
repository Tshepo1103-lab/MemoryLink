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

    [HospitalActionEnum.addHospitalRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [HospitalActionEnum.addHospitalSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [HospitalActionEnum.addHospitalError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [HospitalActionEnum.updateHospitalRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [HospitalActionEnum.updateHospitalSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [HospitalActionEnum.updateHospitalError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [HospitalActionEnum.deleteHospitalRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [HospitalActionEnum.deleteHospitalSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [HospitalActionEnum.deleteHospitalError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
