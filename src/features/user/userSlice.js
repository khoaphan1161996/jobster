import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { error_msg, hello_msg, welcome_msg } from "../../libs/constants/msg";
import { USER } from "../../libs/constants/url_action";
import {
  addUserToLocalStorage,
  getUserToLocalStorage,
  removeUserToLocalStorage,
} from "../../utils/localStorage";
import {
  clearStoreThunk,
  loginUserThunk,
  registerUserThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserToLocalStorage(),
};

export const registerUser = createAsyncThunk(
  USER.REGISTER_USER_ACTION,
  async (user, thunkAPI) => {
    return registerUserThunk(USER.URL_REGISTER, user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  USER.LOGIN_USER_ACTION,
  async (user, thunkAPI) => {
    return loginUserThunk(USER.URL_LOGIN, user, thunkAPI);
  }
);

export const clearStore = createAsyncThunk(
  USER.CLEAR_STORE_USER_ACTION,
  clearStoreThunk
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserToLocalStorage("user");
      if (payload) {
        toast.success(payload);
      }
    },
    toogleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`${hello_msg} ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`${welcome_msg} ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error(`${error_msg}`);
      });
  },
});

export const { logoutUser, toogleSidebar } = userSlice.actions;
export default userSlice.reducer;
