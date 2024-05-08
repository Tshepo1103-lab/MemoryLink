import { handleActions } from "redux-actions";
import { INITIAL_STATE, IProfileStateContext } from "./context";
import { ProfileActionEnum } from "./actions";

export const profileReducer = handleActions<
  IProfileStateContext,
  IProfileStateContext
>(
  {
    [ProfileActionEnum.countAliveProfile]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.countDeceasedProfile]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.countAllProfile]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.putProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.putProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.putProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.getAllProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getAllProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getAllProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
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

    [ProfileActionEnum.getRecentProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.getRecentProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ProfileActionEnum.getRecentProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.getFaceProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [ProfileActionEnum.getFaceProfileSuccess]: (state, action) => {
      const profile = action.payload.faceProfile;
      const faceProfiles = state.faceProfiles
        ? [...state.faceProfiles, profile]
        : [profile];
      return {
        ...state,
        ...action.payload,
        faceProfiles,
      };
    },
    [ProfileActionEnum.getFaceProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
