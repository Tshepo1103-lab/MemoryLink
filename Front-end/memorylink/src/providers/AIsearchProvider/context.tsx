import { createContext } from "react";

export const INITIAL_STATE: ISearchStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  searchedProfiles: undefined,
};

export interface IProfile {
  id: number;
  gender: string;
  ageRange: string;
  distinguishingFeature: string;
  admissionDate: string;
}

export interface ISearchResponse {
  answer: string;
  profiles: { profiles: IProfile[] };
}

export interface ISearchStateContext {
  isPending: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
  searchedProfiles?: ISearchResponse;
}

export interface ISearchActionContext {
  searchProfiles?: (input: string) => void;
}

export const SearchStateContext =
  createContext<ISearchStateContext>(INITIAL_STATE);

export const SearchActionContext =
  createContext<ISearchActionContext>(undefined);
