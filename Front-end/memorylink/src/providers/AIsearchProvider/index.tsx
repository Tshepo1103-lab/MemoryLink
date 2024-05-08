import { getAxiosInstace } from "@/utils/axiosInstance/axiosInstance";
import { useContext, useMemo, useReducer } from "react";
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
import { useUserState } from "../AuthProvider";

export const AISearchProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  const { UserLogin } = useUserState();

  const instance = useMemo(() => {
    const accessToken = UserLogin?.accessToken;
    if (accessToken) {
      return getAxiosInstace(accessToken);
    } else {
      return getAxiosInstace("");
    }
  }, [state]);

  const searchProfiles = async (input: string) => {
    dispatch(searchProfilesRequest());
    try {
      const endpoint = "http://localhost:3002/llm/retrieval?prompt=";
      const response = await instance.get(`${endpoint + input}`);
      if (true) {
        console.log(response.data, "dfghjkl");
        dispatch(searchProfilesSuccess(response.data));
      }
    } catch (error) {
      dispatch(searchProfilesError());
    }
  };

  return (
    <SearchStateContext.Provider value={state}>
      <SearchActionContext.Provider value={{ searchProfiles }}>
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
