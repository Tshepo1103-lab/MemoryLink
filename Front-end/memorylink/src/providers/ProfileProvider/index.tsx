import { getAxiosInstace } from "@/utils/axiosInstance/axiosInstance";
import { useContext, useMemo, useReducer } from "react";
import {
  countall,
  countallalive,
  countalldeceased,
  createProfileError,
  createProfileRequest,
  createProfileSuccess,
  getAliveProfilesSuccess,
  getAllProfileError,
  getAllProfileRequest,
  getAllProfileSuccess,
  getDeceasedProfilesSuccess,
  getFaceProfileError,
  getFaceProfileRequest,
  getFaceProfileSuccess,
  getProfileError,
  getProfileRequest,
  getProfileSuccess,
  getProfilesError,
  getProfilesRequest,
  getRecentProfileRequest,
  getRecentProfileSuccess,
  getRecentProfilesError,
  getbyhospitalProfileRequest,
  getbyhospitalProfileSuccess,
  getbyhospitalProfilesError,
  updateprofileError,
  updateprofileRequest,
  updateprofileSuccess,
} from "./actions";
import {
  INITIAL_STATE,
  IProfileRequest,
  ProfileActionContext,
  ProfileStateContext,
} from "./context";
import { profileReducer } from "./reducer";
import { useUserState } from "../AuthProvider";
import axios from "axios";
import { message } from "antd";

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
  const getFaceProfile = async (id: string) => {
    dispatch(getFaceProfileRequest());
    try {
      console.log("enter");
      const endpoint = "api/services/app/Profile/GetProfileById?profileId=";
      const response = await instance.get(`${endpoint + id}`);
      if (response.data.success) {
        dispatch(getFaceProfileSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(getFaceProfileError());
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

  const getRecent = async () => {
    dispatch(getRecentProfileRequest());
    try {
      const endpoint = "api/services/app/Profile/GetRecent5ByCount";
      const response = await instance.get(endpoint);
      if (response.data.success) {
        dispatch(getRecentProfileSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(getRecentProfilesError());
    }
  };

  const deleteProfile = async (id: string) => {
    try {
      const endpoint = "";
      const response = await instance.delete(`${endpoint + id}`);
      if (response.data.success) {
        message.success("profile deleted");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const embed = async (id: any) => {
    try {
      const endpoint = "http://localhost:3002/llm/embed?profileId=";
      const response = await axios.get(`${endpoint + id}`);
      if (response.data.success) {
        message.success("Embedded the data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getallprofiles = async () => {
    dispatch(getAllProfileRequest());
    try {
      const endpoint = "api/services/app/Profile/GetAllProfile";
      const response = await instance.get(endpoint);
      if (response.data.success) {
        dispatch(getAllProfileSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(getAllProfileError());
    }
  };

  const updateprofile = async (payload: IProfileRequest) => {
    dispatch(updateprofileRequest());
    try {
      const endpoint = "api/services/app/Profile/Update";
      const response = await instance.put(endpoint, payload);
      if (response.data.success) {
        dispatch(updateprofileSuccess());
        message.success("updated");
      }
    } catch (error) {
      dispatch(updateprofileError());
    }
  };

  const countallprofiles = async () => {
    try {
      const endpoint = "api/services/app/Profile/GetAllProfilesCount";
      const response = await instance.get(endpoint);
      dispatch(countall(response.data.result));
    } catch (error) {
      console.error(error);
    }
  };

  const countdeceased = async () => {
    try {
      const endpoint = "api/services/app/Profile/GetDeceasedProfilesCount";
      const response = await instance.get(endpoint);
      dispatch(countalldeceased(response.data.result));
    } catch (error) {
      console.error(error);
    }
  };

  const countalive = async () => {
    try {
      const endpoint = "api/services/app/Profile/GetAliveProfilesCount";
      const response = await instance.get(endpoint);
      dispatch(countallalive(response.data.result));
    } catch (error) {
      console.error(error);
    }
  };
  const createprofile = async (payload: IProfileRequest) => {
    dispatch(createProfileRequest());
    try {
      const formData = new FormData();
      formData.append("gender", payload?.ageRange);
      formData.append("ageRange", payload.build);
      formData.append("distinguishingFeature", payload.distinguishingFeature);
      formData.append("eyeColor", payload.eyeColor);
      formData.append("file", payload.file);
      formData.append("gender", payload.gender);
      formData.append("hairColor", payload.hairColor);
      formData.append("height", payload.height);
      formData.append("hospitalId", payload.hospitalId);
      formData.append("locationFound", payload.locationFound);
      formData.append("moreDetails", payload.moreDetails);
      formData.append("skinTone", payload.skinTone);

      const jsonPayload: any = {};
      formData.forEach((value, key) => {
        jsonPayload[key] = value;
      });
      const endpoint = "api/services/app/Profile/CreateProfile";
      const response = await instance.post(endpoint, jsonPayload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        dispatch(createProfileSuccess());
        if (embed) embed(response.data.result.id);
      }
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
          createprofile,
          getRecent,
          deleteProfile,
          getFaceProfile,
          getallprofiles,
          updateprofile,
          countallprofiles,
          countdeceased,
          countalive,
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
