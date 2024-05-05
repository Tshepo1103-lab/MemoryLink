import { instance } from "@/utils/axiosInstance/axiosInstance";
import { useContext, useReducer } from "react";
import { recognitionReducer } from "./reducer";
import { INITIAL_STATE, RecognitionActionContext, RecognitionStateContext } from "./context";
import { recognitionProfilesError, recognitionProfilesRequest, recognitionProfilesSuccess } from "./actions";
import axios from "axios";

export const RecognitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(recognitionReducer, INITIAL_STATE);

  const recogniseProfiles = async (input: string) => {
    dispatch(recognitionProfilesRequest());
    try {
    console.log('Get here !!!!')
      const endpoint = "http://127.0.0.1:8000/facematch";
      const response = await axios.post(endpoint,input);
      if (response.data.success) {
        dispatch(recognitionProfilesSuccess(response.data.result));
      }
    } catch (error) {
      dispatch(recognitionProfilesError());
    }
  };

  return (
    <RecognitionStateContext.Provider value={state}>
      <RecognitionActionContext.Provider value={{recogniseProfiles}}>
        {children}
      </RecognitionActionContext.Provider>
    </RecognitionStateContext.Provider>
  );

};


export const useRecognitionState = () => {
  const context = useContext(RecognitionStateContext);
  if (!context) {
    throw new Error("useRecognitionState must be used within a RecognitionProvider");
  }
  return context;
};

export const useRecognitionActions = () => {
  const context = useContext(RecognitionActionContext);
  if (!context) {
    throw new Error("useRecognitionActions must be used within a RecognitionProvider");
  }
  return context;
};
