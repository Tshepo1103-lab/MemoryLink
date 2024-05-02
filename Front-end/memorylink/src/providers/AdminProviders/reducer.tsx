import { handleActions } from "redux-actions";
import { IAdminStateContext, INITIAL_STATE } from "./context";
import { AdminActionEnum } from "./actions";

export const adminReducer = handleActions<IAdminStateContext, IAdminStateContext>(
  {
    [AdminActionEnum.regiserAdminRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AdminActionEnum.registerAdminSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AdminActionEnum.registerAdminError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [AdminActionEnum.getallAdminRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AdminActionEnum.getallAdminSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AdminActionEnum.getallAdminError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [AdminActionEnum.deleteAdminRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AdminActionEnum.deleteAdminSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AdminActionEnum.deleteAdminError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [AdminActionEnum.updateAdminRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AdminActionEnum.updateAdminSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AdminActionEnum.updateAdminError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
