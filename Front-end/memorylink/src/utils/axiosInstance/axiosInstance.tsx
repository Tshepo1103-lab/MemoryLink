import axios from "axios";

export const getAxiosInstace = (accessToken: string) =>
  axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_PASS}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
