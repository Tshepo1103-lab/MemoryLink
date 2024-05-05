import { instance } from "@/utils/axiosInstance/axiosInstance";
import { useContext, useReducer } from "react";
import {
    searchProfilesError,
    searchProfilesRequest,
    searchProfilesSuccess,
} from "./actions";
import {
    INITIAL_STATE,
    SearchActionContext,
    SearchStateContext,
} from "./context";
import { searchReducer } from "./reducer";

export const AISearchProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  const searchProfiles = async (input: string) => {
    dispatch(searchProfilesRequest());
    try {
      const endpoint = " ";
      const response = await instance.get(`${endpoint + input}`);
      if (response.data.success) {
        dispatch(searchProfilesSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(searchProfilesError());
    }
  };

  return (
    <SearchStateContext.Provider value={state}>
      <SearchActionContext.Provider value={{searchProfiles}}>
        {children}
      </SearchActionContext.Provider>
    </SearchStateContext.Provider>
  );

};


export const useSearchState = () => {
  const context = useContext(SearchStateContext);
  if (!context) {
    throw new Error("useProfileState must be used within a ProfileProvider");
  }
  return context;
};

export const useSearchActions = () => {
  const context = useContext(SearchActionContext);
  if (!context) {
    throw new Error("useProfileAction must be used within a ProfileProvider");
  }
  return context;
};
