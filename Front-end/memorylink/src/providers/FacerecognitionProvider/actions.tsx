import { createAction } from "redux-actions";
import { IRecognitionResponse, IRecognitionStateContext } from "./context";

export enum recognitionActionEnum {
  recognitionProfileRequest = "RECOGNITION_PROFILES_REQUEST",
  recognitionProfileSuccess = "RECOGNITION_PROFILES_SUCCESS",
  recognitionProfileError = "RECOGNITION_PROFILES_ERROR",

}

export const recognitionProfilesRequest = createAction<IRecognitionStateContext>(
  recognitionActionEnum.recognitionProfileRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const recognitionProfilesSuccess = createAction<
 IRecognitionStateContext,
  IRecognitionResponse[]
>(recognitionActionEnum.recognitionProfileSuccess, (recognisedProfiles) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  recognisedProfiles,
}));
export const recognitionProfilesError = createAction<
  IRecognitionStateContext
>(recognitionActionEnum.recognitionProfileError,
    () => ({
    isPending: false,
    isError: false,
    isSuccess: true,
  
}));

