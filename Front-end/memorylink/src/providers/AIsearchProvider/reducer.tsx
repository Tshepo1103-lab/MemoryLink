import { handleActions } from "redux-actions";
import { INITIAL_STATE, ISearchStateContext } from "./context";
import { SearchActionEnum } from "./actions";

export const searchReducer = handleActions<
  ISearchStateContext,
  ISearchStateContext
>(
  {
    [SearchActionEnum.searchProfileRequest]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SearchActionEnum.searchProfileSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SearchActionEnum.searchProfileError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
