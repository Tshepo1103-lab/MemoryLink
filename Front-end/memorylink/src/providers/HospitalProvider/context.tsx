import { createContext } from "react";

export const INITIAL_STATE: IHospitalStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  GetAllHospital: undefined,
};

export interface IHospitalResponse {
  name: string;
  email: string;
  contact: string;
  url: string;
}
export interface IHospitalStateContext {
  isPending?: Boolean;
  isSuccess?: Boolean;
  isError?: Boolean;
  GetAllHospital?: IHospitalResponse;
}

export interface IHospitalActionContext {
  getallhospital?: () => void;
}

export const HospitalStateContext =
  createContext<IHospitalStateContext>(INITIAL_STATE);

export const HospitalActionContext =
  createContext<IHospitalActionContext>(undefined);
