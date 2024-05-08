import { getAxiosInstace } from "@/utils/axiosInstance/axiosInstance";
import { useContext, useMemo, useReducer } from "react";
import {
  createProfileError,
  createProfileRequest,
  createProfileSuccess,
  getAliveProfilesSuccess,
  getDeceasedProfilesSuccess,
  getProfileError,
  getProfileRequest,
  getProfileSuccess,
  getProfilesError,
  getProfilesRequest,
  getbyhospitalProfileRequest,
  getbyhospitalProfileSuccess,
  getbyhospitalProfilesError,
} from "./actions";
import {
  INITIAL_STATE,
  IProfileRequest,
  ProfileActionContext,
  ProfileStateContext,
} from "./context";
import { profileReducer } from "./reducer";
import { useUserState } from "../AuthProvider";

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(profileReducer, INITIAL_STATE);

  const { UserLogin } = useUserState();

  const instance = useMemo(() => {
    const accessToken = UserLogin?.accessToken;
    if (accessToken) {
      return getAxiosInstace(accessToken);
    } else {
      return getAxiosInstace("");
    }
  }, [state]);

  const getalldeceasedProfiles = async () => {
    dispatch(getProfilesRequest());
    try {
      const endpoint = "api/services/app/Profile/GetAllDeceasedProfile";
      const response = await instance.get(endpoint);
      if (response.data.success) {
        dispatch(getDeceasedProfilesSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(getProfilesError());
    }
  };
  const getallAliveProfiles = async () => {
    dispatch(getProfilesRequest());
    try {
      const endpoint = "api/services/app/Profile/GetAllAliveProfile";
      const response = await instance.get(endpoint);
      if (response.data.success) {
        dispatch(getAliveProfilesSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(getProfilesError());
    }
  };
  const getprofile = async (id: string) => {
    dispatch(getProfileRequest());
    try {
      console.log("enter");
      const endpoint = "api/services/app/Profile/GetProfileById?profileId=";
      const response = await instance.get(`${endpoint + id}`);
      if (response.data.success) {
        dispatch(getProfileSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(getProfileError());
    }
  };

  const getbyhospital = async (id: string) => {
    dispatch(getbyhospitalProfileRequest());
    try {
      const endpoint =
        "api/services/app/Profile/GetAllProfilesByHospital?hospitalId=";
      const response = await instance.get(`${endpoint + id}`);
      if (response.data.success) {
        dispatch(getbyhospitalProfileSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(getbyhospitalProfilesError());
    }
  };

  const createprofile = async (payload: IProfileRequest) => {
    dispatch(createProfileRequest());
    try {
      const formData = new FormData();
      // formData.append('categoryId',payload.categoryId)
      // formData.append('title', payload.title);
      // formData.append('author', payload.authors.join(', '));
      // formData.append('isbn', payload.isbn);
      // formData.append('description', payload.description);
      // formData.append('file', payload.file);

      const jsonPayload: any = {};
      formData.forEach((value, key) => {
        jsonPayload[key] = value;
      });

      const response = await instance.post(
        `/services/app/Book/createBook`,
        jsonPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    } catch (error) {
      dispatch(createProfileError());
    }
  };

  return (
    <ProfileStateContext.Provider value={state}>
      <ProfileActionContext.Provider
        value={{
          getalldeceasedProfiles,
          getallAliveProfiles,
          getprofile,
          getbyhospital,
        }}
      >
        {children}
      </ProfileActionContext.Provider>
    </ProfileStateContext.Provider>
  );
};

export const useProfileState = () => {
  const context = useContext(ProfileStateContext);
  if (!context) {
    throw new Error("useProfileState must be used within a ProfileProvider");
  }
  return context;
};

export const useProfileActions = () => {
  const context = useContext(ProfileActionContext);
  if (!context) {
    throw new Error("useProfileAction must be used within a ProfileProvider");
  }
  return context;
};
