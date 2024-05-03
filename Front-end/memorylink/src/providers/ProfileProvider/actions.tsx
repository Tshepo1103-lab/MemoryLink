import { createAction } from "redux-actions";
import {
  IProfileResponse,
  INITIAL_STATE,
  IProfileStateContext,
} from "./context";

export enum ProfileActionEnum {
  getProfileRequest = "GET_PROFILES_REQUEST",
  getDeceasedProfileSuccess = "GET_DECEASED_PROFILES_SUCCESS",
  getAliveProfileSuccess = "GET_ALIVE_PROFILES_SUCCESS",
  getUserError = "GET_PROFILES_ERROR",

  getAProfileRequest = "GET_PROFILE_REQUEST",
  getAProfileSuccess = "GET_PROFILE_SUCCESS",
  getAProfileError = "GET_PROFILE_ERROR",
}

export const getProfilesRequest = createAction<IProfileStateContext>(
  ProfileActionEnum.getProfileRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const getAliveProfilesSuccess = createAction<
  IProfileStateContext,
  IProfileResponse[]
>(ProfileActionEnum.getDeceasedProfileSuccess, (aliveprofile) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  aliveprofile,
}));
export const getDeceasedProfilesSuccess = createAction<
  IProfileStateContext,
  IProfileResponse[]
>(ProfileActionEnum.getAliveProfileSuccess, (deceasedprofile) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  deceasedprofile,
}));

export const getProfilesError = createAction<IProfileStateContext>(
  ProfileActionEnum.getUserError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);

export const getProfileRequest = createAction<IProfileStateContext>(
  ProfileActionEnum.getAProfileRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const getProfileSuccess = createAction<
  IProfileStateContext,
  IProfileResponse
>(ProfileActionEnum.getAProfileSuccess, (profile) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  profile,
}));

export const getProfileError = createAction<IProfileStateContext>(
  ProfileActionEnum.getAProfileError,
  () => ({ isPending: false, isError: true, isSuccess: false }),
);
