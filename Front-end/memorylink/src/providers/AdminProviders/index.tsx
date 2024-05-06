import { message } from "antd";
import { useContext, useMemo, useReducer } from "react";
import { adminReducer } from "./reducer";
import {
  AdminActionContext,
  AdminStateContext,
  IAdminActionContext,
  IAdminRequest,
  IAdminStateContext,
  INITIAL_STATE,
} from "./context";
import {
  DeletAdminError,
  DeleteAdminSuccess,
  UpdateAdminRequest,
  UpdateAdminSuccess,
  getAdminsError,
  getAdminsRequest,
  getAdminsSuccess,
  regiserAdminResponse,
  registerAdminAction,
  registerAdminError,
} from "./actions";
import { getAxiosInstace } from "@/utils/axiosInstance/axiosInstance";
import { deletehospitalRequest } from "../HospitalProvider/actions";
import { useUserState } from "../AuthProvider";

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(adminReducer, INITIAL_STATE);
  const { UserLogin } = useUserState();

  const instance = useMemo(() => {
    const accessToken = UserLogin?.accessToken;
    if (accessToken) {
      return getAxiosInstace(accessToken);
    } else {
      return getAxiosInstace("");
    }
  }, [state]);

  const adminregister = async (payload: IAdminRequest) => {
    dispatch(registerAdminAction());
    try {
      const endpoint = "api/services/app/User/Create";
      const response = await instance.post(endpoint, payload);
      if (response.data.success) {
        dispatch(regiserAdminResponse(response.data.result));
        getalladmins();
        message.success("Admin successfully created");
      }
    } catch (error) {
      console.error(error);
      dispatch(registerAdminError());
    }
  };

  const getalladmins = async () => {
    dispatch(getAdminsRequest());
    try {
      const endpoint = "api/services/app/User/GetAllAdmins";
      const response = await instance.get(endpoint);
      if (response.data.success) {
        dispatch(getAdminsSuccess(response.data.result));
      } else {
        throw new Error(response.data.error.message);
      }
    } catch (error) {
      dispatch(getAdminsError());
      console.error(error);
    }
  };

  const deleteadmin = async (id: string) => {
    dispatch(deletehospitalRequest());
    try {
      const endpoint = "api/services/app/User/Delete?Id=";
      const response = await instance.delete(`${endpoint + id}`);
      if (response.data.success) {
        dispatch(DeleteAdminSuccess());

        message.success("Admin successfully deleted");
      }
    } catch (error) {
      dispatch(DeletAdminError());
    }
  };

  const updateadmin = async (payload: IAdminRequest) => {
    dispatch(UpdateAdminRequest());
    try {
      const endpoint = "api/services/app/User/Update";
      const response = await instance.put(endpoint, payload);
      if (response.data.success) {
        dispatch(UpdateAdminSuccess());
        getalladmins();
        message.success("Admin details successfully updated");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AdminStateContext.Provider value={state}>
      <AdminActionContext.Provider
        value={{ adminregister, getalladmins, deleteadmin, updateadmin }}
      >
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
