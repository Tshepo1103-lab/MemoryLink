import { useContext, useReducer } from "react";
import {
  HospitalActionContext,
  HospitalStateContext,
  INITIAL_STATE,
} from "./context";
import { hospitalReducer } from "./reducer";
import {
  getAllhospitalError,
  getallhospitalRequest,
  getallhospitalResponse,
} from "./actions";
import axios from "axios";

export const HospitalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(hospitalReducer, INITIAL_STATE);

  const getallhospital = async () => {
    dispatch(getallhospitalRequest());
    try {
      const endpoint =
        "https://localhost:44311/api/services/app/Hospital/GetAll";
      const response = await axios.post(endpoint);
      if (response.data.success) {
        dispatch(getallhospitalResponse(response.data.result));
      }
    } catch (error) {
      console.error(error);
      dispatch(getAllhospitalError());
    }
  };
  return (
    <HospitalStateContext.Provider value={state}>
      <HospitalActionContext.Provider value={{ getallhospital }}>
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
