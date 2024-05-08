import { createContext } from "react";

export const INITIAL_STATE: IRecognitionStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  recognisedProfiles: undefined,
};

export interface IRecognitionResponse {
  results: {
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
    };
  };
}

export interface IRecognitionStateContext {
  isPending: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
  recognisedProfiles?: IRecognitionResponse[];
}

export interface IRecognitionActionContext {
  recogniseProfiles?: (image: string) => void;
}

export const RecognitionStateContext =
  createContext<IRecognitionStateContext>(INITIAL_STATE);

export const RecognitionActionContext =
  createContext<IRecognitionActionContext>(undefined);
