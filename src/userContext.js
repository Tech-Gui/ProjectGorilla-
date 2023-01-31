import { createContext, useReducer } from "react";

export const userContext = createContext();

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("UserInfo"))
    : null,
};
