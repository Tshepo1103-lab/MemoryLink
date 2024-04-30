import { createContext } from "react";

export const INITIAL_STATE: IHospitalStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  hospitals: undefined,
  hospital: undefined,
};

export interface IHospital {
  id: string;
  name: string;
  email: string;
  contact: string;
  url: string;
}
export interface IHospitalStateContext {
  isPending: Boolean;
  isSuccess: Boolean;
  isError: Boolean;
  hospitals?: IHospital[];
  hospital?: IHospital;
}

export interface IHospitalActionContext {
  getallhospital?: () => void;
  addhospital?: (payload: IHospital) => void;
  updatehospital?: (payload: IHospital) => void;
  deletehospital?: (id: string) => void;
  puthospital?: (payload: IHospital) => void;
}

export const HospitalStateContext =
  createContext<IHospitalStateContext>(INITIAL_STATE);

export const HospitalActionContext =
  createContext<IHospitalActionContext>(undefined);
