import { handleActions } from "redux-actions";
import { INITIAL_STATE, IProfileStateContext } from "./context";
import { ProfileActionEnum } from "./actions";

export const profileReducer = handleActions<
  IProfileStateContext,
  IProfileStateContext
>(
  {
    [ProfileActionEnum.getProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getDeceasedProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getAliveProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.getAProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getAProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getAProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.createProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.createProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.createProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.getbyHospitalProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.getbyHospitalProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getbyHospitalProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
