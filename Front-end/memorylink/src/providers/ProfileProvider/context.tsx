import { createContext } from "react";

export const INITIAL_STATE: IProfileStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  deceasedprofile: undefined,
  aliveprofile: undefined,
  profile: undefined,
  hospitalProfiles: undefined,
  faceProfiles: undefined,
  allProfiles: undefined,
  aliveCount: undefined,
  allProfileCount: undefined,
  deceasedCount: undefined,
};

export interface IProfileRequest {
  id?: string;
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
  file: any;
  imageUrl: { file: any };
  admissionDate: string;
}

export interface IProfileResponse {
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
}

export interface IProfileStateContext {
  isPending: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
  deceasedprofile?: IProfileResponse[];
  aliveprofile?: IProfileResponse[];
  profile?: IProfileResponse;
  hospitalProfiles?: IProfileResponse[];
  recentProfile?: IProfileResponse[];
  faceProfiles?: IProfileResponse[];
  faceProfile?: IProfileResponse;
  allProfiles?: IProfileResponse[];
  aliveCount?: string;
  allProfileCount?: string;
  deceasedCount?: string;
}

export interface IProfileActionContext {
  getalldeceasedProfiles?: () => void;
  getallAliveProfiles?: () => void;
  getprofile?: (id: string) => void;
  getFaceProfile?: (id: string) => void;
  createprofile?: (payload: IProfileRequest) => void;
  getbyhospital?: (id: string) => void;
  getRecent?: () => void;
  embed?: (id: any) => void;
  deleteProfile?: (id: string) => void;
  getallprofiles?: () => void;
  updateprofile?: (payload: IProfileRequest) => void;
  countallprofiles?: () => void;
  countalive?: () => void;
  countdeceased?: () => void;
}

export const ProfileStateContext =
  createContext<IProfileStateContext>(INITIAL_STATE);

export const ProfileActionContext =
  createContext<IProfileActionContext>(undefined);
