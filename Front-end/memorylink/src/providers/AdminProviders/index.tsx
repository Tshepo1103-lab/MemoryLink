import { message } from "antd";
import { useContext, useReducer } from "react";
import { adminReducer } from "./reducer";
import { AdminActionContext, AdminStateContext, IAdminActionContext, IAdminRequest, IAdminStateContext, INITIAL_STATE } from "./context";
import { getAdminsError, getAdminsRequest, getAdminsSuccess, regiserAdminResponse, registerAdminAction, registerAdminError } from "./actions";
import { instance } from "@/utils/axiosInstance/axiosInstance";

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(adminReducer, INITIAL_STATE);

  const adminregister = async (payload: IAdminRequest) => {
    dispatch(registerAdminAction());
    try {
      const endpoint = "api/services/app/User/Create";
      const response = await instance.post(endpoint, payload);
      if (response.data.success) {
        dispatch(regiserAdminResponse(response.data.result));
        message.success("Admin successfully created");
        //getall
      }
    } catch (error) {
      console.error(error);
      dispatch(registerAdminError());
    }
  };

  const getalladmins = async () =>{
    dispatch(getAdminsRequest());
    try{
      const endpoint = 'api/services/app/User/GetAllAdmins';
      const response = await instance.get(endpoint);
      if(response.data.success){
        dispatch(getAdminsSuccess(response.data.result))
        getalladmins();
      }
    }
    catch(error){
      dispatch(getAdminsError());
    }
  }
  return (
    <AdminStateContext.Provider value={state}>
      <AdminActionContext.Provider value={{adminregister,getalladmins }}>
        {children}
      </AdminActionContext.Provider>
    </AdminStateContext.Provider>
  );
};

export const useAdminState = () => {
  const context = useContext(AdminStateContext);
  if (!context) {
    throw new Error("useAdminState must be used within a AdminProvider");
  }
  return context;
};

export const useAdminActions = () => {
  const context = useContext(AdminActionContext);
  if (!context) {
    throw new Error("useAdminAction must be used within a AdminProvider");
  }
  return context;
};

export const useUser: any = (): IAdminStateContext & IAdminActionContext => {
  return {
    ...useAdminState(),
    ...useAdminActions(),
  };
};
