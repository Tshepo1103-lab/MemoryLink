import {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  loginErrorAction,
  loginSuccessAction,
  loginUserAction,
} from "./actions";
import {
  ILoginRequest,
  ILoginResponse,
  INITIAL_STATE,
  IUserActionContext,
  IUserStateContext,
  UserActionContext,
  UserStateContext,
} from "./context";
import { userReducer } from "./reducer";
import { instance } from "../../utils/axiosInstance/axiosInstance";
import { getRole } from "../../utils/decoder/decoder";
import { useRouter } from "next/navigation";
import axios from "axios";
import { routeModule } from "next/dist/build/templates/app-page";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { push } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const encryptedAccessToken = localStorage.getItem(
          "encryptedAccessToken",
        );
        const expireInSeconds_str = localStorage.getItem("expireInSeconds");
        const userId_str = localStorage.getItem("userId");
        const role = localStorage.getItem("role"); // Retrieve role from local storage
        let expireInSeconds =
          expireInSeconds_str === null
            ? 0
            : Number.parseInt(expireInSeconds_str);
        let userId = userId_str === null ? 0 : Number.parseInt(userId_str);

        if (
          accessToken &&
          encryptedAccessToken &&
          expireInSeconds &&
          userId &&
          role
        ) {
          const payload: ILoginResponse = {
            accessToken,
            encryptedAccessToken,
            userId,
            expireInSeconds,
            role: role, // Assign role to payload
          };
          dispatch(loginSuccessAction(payload));
        }
      } catch (error) {
        console.error("Error accessing localStorage: ", error);
      }
    }
  }, []);

  useEffect(() => {
    const accessToken = state.UserLogin?.accessToken;
    const encryptedAccessToken = state.UserLogin?.encryptedAccessToken;
    const expireInSeconds = state.UserLogin?.expireInSeconds;
    const userId = state.UserLogin?.userId;
    const role = state.UserLogin?.role;

    if (typeof window !== "undefined") {
      if (
        accessToken &&
        encryptedAccessToken &&
        expireInSeconds &&
        userId &&
        role
      ) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("encryptedAccessToken", encryptedAccessToken);
        localStorage.setItem("expireInSeconds", expireInSeconds + "");
        localStorage.setItem("userId", userId + "");
        localStorage.setItem("role", role + "");
      } else {
        localStorage.clear();
      }
    }
  }, [state]);

  const login = async (payload: ILoginRequest) => {
    dispatch(loginUserAction());
    try {
      const endpoint = "https://localhost:44311/api/TokenAuth/Authenticate";
      const response = await axios.post(endpoint, payload);

      if (response.data.success) {
        console.log(response);
        const payload: ILoginResponse = {
          accessToken: response.data.result.accessToken,
          encryptedAccessToken: response.data.result.encryptedAccessToken,
          expireInSeconds: response.data.result.expireInSeconds,
          userId: response.data.result.userId,
          role: getRole(response.data.result),
        };
        dispatch(loginSuccessAction(payload));
        if (payload.role == "user") {
          push("/");
        } else if (payload.role == "admin") {
          push("/dashboard");
        }
      }
    } catch (error) {
      dispatch(loginErrorAction());
    }
  };
  return (
    <UserStateContext.Provider value={state}>
      <UserActionContext.Provider value={{ login }}>
        {children}
      </UserActionContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error("useLoginState must be used within a AuthProvider");
  }
  return context;
};

export const useUserActions = () => {
  const context = useContext(UserActionContext);
  if (!context) {
    throw new Error("useLoginActions must be used within a AuthProvider");
  }
  return context;
};

export const useUser: any = (): IUserStateContext & IUserActionContext => {
  return {
    ...useUserState(),
    ...useUserActions(),
  };
};
