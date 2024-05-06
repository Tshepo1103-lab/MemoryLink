import { handleActions } from "redux-actions";
import { INITIAL_STATE, IRecognitionStateContext } from "./context";
import { recognitionActionEnum } from "./actions";

export const recognitionReducer = handleActions<
  IRecognitionStateContext,
  IRecognitionStateContext
>(
  {
    [recognitionActionEnum.recognitionProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [recognitionActionEnum.recognitionProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [recognitionActionEnum.recognitionProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
