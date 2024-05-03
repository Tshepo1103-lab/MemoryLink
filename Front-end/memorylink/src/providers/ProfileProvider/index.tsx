import { instance } from "@/utils/axiosInstance/axiosInstance";
import { useContext, useReducer } from "react";
import {
  getAliveProfilesSuccess,
  getDeceasedProfilesSuccess,
  getProfileError,
  getProfileRequest,
  getProfileSuccess,
  getProfilesError,
  getProfilesRequest,
} from "./actions";
import {
  INITIAL_STATE,
  ProfileActionContext,
  ProfileStateContext,
} from "./context";
import { profileReducer } from "./reducer";

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(profileReducer, INITIAL_STATE);

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

  return (
    <ProfileStateContext.Provider value={state}>
      <ProfileActionContext.Provider
        value={{ getalldeceasedProfiles, getallAliveProfiles, getprofile }}
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
