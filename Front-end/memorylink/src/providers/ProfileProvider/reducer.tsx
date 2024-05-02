import { handleActions } from "redux-actions";
import { INITIAL_STATE, IProfileStateContext } from "./context";
import { ProfileActionEnum } from "./actions";

export const profileReducer = handleActions<IProfileStateContext, IProfileStateContext>(
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
  },
  INITIAL_STATE,
);
