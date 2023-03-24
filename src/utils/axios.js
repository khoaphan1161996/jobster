import axios from "axios";
import { clearStore } from "../features/user/userSlice.js";
import { unathorize_msg } from "../libs/constants/msg.js";
import { BASE_URL } from "../libs/constants/url_action.js";
import { getUserToLocalStorage } from "./localStorage.js";

const customFetch = axios.create({
  baseURL: BASE_URL,
});

customFetch.interceptors.request.use((config) => {
  const user = getUserToLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue(unathorize_msg);
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
