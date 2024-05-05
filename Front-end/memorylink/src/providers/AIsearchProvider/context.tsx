import { createContext } from "react";

export const INITIAL_STATE: ISearchStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  searchedProfiles:undefined
};

export interface ISearchResponse {
    results:{
        id: number;
        gender: string;
        ageRange: string;
        height: string;
        build: string;
        eyeColor: string;
        skinTone: string;
        hairColor: string;
        locationFound: string;
        distinguishingFeature: string;
        moreDetails: string;
        type: string;
        ward: string;
        hospitalId: string;
        imageId: string;
        image: string;
        hospital?: {
            name: string;
            url: string;
        }
    }
}

export interface ISearchStateContext {
  isPending: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
  searchedProfiles?: ISearchResponse[];
}

export interface ISearchActionContext {
  searchProfiles?: (input:string) => void;
}

export const SearchStateContext =
  createContext<ISearchStateContext>(INITIAL_STATE);

export const SearchActionContext =
  createContext<ISearchActionContext>(undefined);
