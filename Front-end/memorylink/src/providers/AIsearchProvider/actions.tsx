import { createAction } from "redux-actions";
import { ISearchResponse, ISearchStateContext } from "./context";

export enum SearchActionEnum {
  searchProfileRequest = "SEARCH_PROFILES_REQUEST",
  searchProfileSuccess = "SEARCH_PROFILES_SUCCESS",
  searchProfileError = "SEARCH_PROFILES_ERROR",

}

export const searchProfilesRequest = createAction<ISearchStateContext>(
  SearchActionEnum.searchProfileRequest,
  () => ({ isPending: true, isError: false, isSuccess: false }),
);

export const searchProfilesSuccess = createAction<
 ISearchStateContext,
  ISearchResponse[]
>(SearchActionEnum.searchProfileSuccess, (searchedProfiles) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  searchedProfiles,
}));
export const searchProfilesError = createAction<
  ISearchStateContext
>(SearchActionEnum.searchProfileError,
    () => ({
    isPending: false,
    isError: false,
    isSuccess: true,
  
}));

