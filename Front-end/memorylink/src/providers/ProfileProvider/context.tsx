import { createContext } from "react";

export const INITIAL_STATE: IProfileStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  deceasedprofile:undefined,
  aliveprofile:undefined
   
};

export interface IProfileRequest{  
  gender: number;
  ageRange: number;
  height: number;
  build: number;
  eyeColor: number;
  skinTone: number;
  hairColor: number;
  locationFound: string;
  distinguishingFeature: string;
  moreDetails: string;
  type: number;
  ward: string;
  hospitalId: string;
  file: string;
}

export interface IProfileResponse{
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
    imageId:string;
    image:string;
}

export interface IProfileStateContext {
  isPending: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
  deceasedprofile?: IProfileResponse[];
  aliveprofile?:IProfileResponse[];
  
}

export interface IProfileActionContext {
    getalldeceasedProfiles?: () => void;
    getallAliveProfiles?: () => void;
   
}

export const ProfileStateContext =
  createContext<IProfileStateContext>(INITIAL_STATE);

export const ProfileActionContext =
  createContext<IProfileActionContext>(undefined);
