import { getAxiosInstace } from "@/utils/axiosInstance/axiosInstance";
import { useContext, useMemo, useReducer } from "react";
import {
  addhospitalError,
  addhospitalRequest,
  addhospitalSuccess,
  deletehospitalError,
  deletehospitalRequest,
  deletehospitalSuccess,
  getAllhospitalError,
  getallhospitalRequest,
  getallhospitalResponse,
  updatehospitalError,
  updatehospitalRequest,
  updatehospitalSuccess,
} from "./actions";
import {
  HospitalActionContext,
  HospitalStateContext,
  IHospital,
  INITIAL_STATE,
} from "./context";
import { hospitalReducer } from "./reducer";
import { useUserState } from "../AuthProvider";
import { message } from "antd";

export const HospitalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(hospitalReducer, INITIAL_STATE);

  const { UserLogin } = useUserState();

  const instance = useMemo(() => {
    const accessToken = UserLogin?.accessToken;
    if (accessToken) {
      return getAxiosInstace(accessToken);
    } else {
      return getAxiosInstace("");
    }
  }, [state]);

  const getallhospital = async () => {
    dispatch(getallhospitalRequest());
    try {
      const endpoint = "api/services/app/Hospital/GetAll";
      const response = await instance.get(endpoint);
      if (response.data.success) {
        dispatch(getallhospitalResponse(response.data.result.items));
      }
    } catch (error) {
      console.error(error);
      dispatch(getAllhospitalError());
    }
  };

  const addhospital = async (payload: IHospital) => {
    dispatch(addhospitalRequest());
    try {
      const endpoint = "api/services/app/Hospital/Create";
      const response = await instance.post(endpoint, payload);
      if (response.data.success) {
        dispatch(addhospitalSuccess());
        message.success("Hospital added succesfully");
        getallhospital();
      }
    } catch (error) {
      console.error(error);
      dispatch(addhospitalError());
    }
  };

  const deletehospital = async (id: any) => {
    dispatch(deletehospitalRequest());

    try {
      const endpoint = "api/services/app/Hospital/Delete?Id=";
      const response = await instance.delete(`${endpoint + id}`);
      if (response.data.success) {
        dispatch(deletehospitalSuccess());
        message.success("Hospital deleted succesfully");
        getallhospital();
      }
    } catch (error) {
      dispatch(deletehospitalError());
    }
  };

  const updatehospital = async (payload: IHospital) => {
    dispatch(updatehospitalRequest());
    try {
      const endpoint = "api/services/app/Hospital/Update";
      const response = await instance.put(endpoint, payload);
      if (response.data.success) {
        dispatch(updatehospitalSuccess());
        message.success("Hospital updated succesfully");
        getallhospital();
      }
    } catch (error) {
      console.error(error);
      dispatch(updatehospitalError());
    }
  };
  return (
    <HospitalStateContext.Provider value={state}>
      <HospitalActionContext.Provider
        value={{ getallhospital, addhospital, deletehospital, updatehospital }}
      >
        {children}
      </HospitalActionContext.Provider>
    </HospitalStateContext.Provider>
  );
};

export const useHospitalState = () => {
  const context = useContext(HospitalStateContext);
  if (!context) {
    throw new Error("useHospitalState must be used within a HospitalProvider");
  }
  return context;
};

export const useHospitalActions = () => {
  const context = useContext(HospitalActionContext);
  if (!context) {
    throw new Error(
      "useHospitalActions must be used within a HospitalProvider",
    );
  }
  return context;
};
