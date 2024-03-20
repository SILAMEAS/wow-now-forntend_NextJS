import { getCookie } from "cookies-next";

export const $headers = {
  "Content-Type": "multipart/form-data",
  Authorization: "Bearer " + getCookie("token"),
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
  "Access-Control-Allow-Credentials": true,
};
