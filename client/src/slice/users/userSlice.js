import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../../global-components/constants";
import { setCookie } from "nookies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (jwt) => {
    try {
      const response = await axios.get(`${constants.url}/api/users/me?populate=*`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      return response.data || {};
    } catch (error) {
      console.log(error);
    }
});

export const addUser = createAsyncThunk("users/registerUser", async (data) => {
  const url = `${constants.url}/api/auth/local/register`;
  console.log("url", url);
  console.log("data", data);

  try {
    const res = await axios.post(url, data);

    setCookie({ res }, "jwt", res.data.jwt, {
      httpOnly: true,
      secure: import.meta.env.MODE !== "development",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    res.status(200).end();
  } catch (e) {
    console.log("e.message", e.message);
    // res.status(400).send(e.response.data.message[0].messages[0]);
    toast.error(e.message, {
      hideProgressBar: true,
    });
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    const response = await axios.delete(`${constants.url}/api/users/${id}`);
    if (response.data) {
      return id;
    }
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  try {
    const response = await axios.put(
      `${constants.url}/api/users/${user.id}`,
      user
    );
    return response.data || [];
  } catch (error) {
    console.log(error);
  }
});

const usersReducer = createSlice({
  name: "users",
  initialState: {
    users: {},
    loggedInUser: {},
    status: "idle",
    error: null,
  },
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
    loginSuccess: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user._id === action.payload
        );
        state.users.splice(index, 1);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user._id === action.payload._id
        );
        state.users[index] = action.payload;
      });
  },
});

export const selectAllUsers = (state) => state.users.users;
export const selectLoggedInUser = (state) => state.users.loggedInUser;
export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user._id === userId);
export const getUserStatus = (state) => state.users.status;
export const getUserError = (state) => state.users.error;

export const { updateUsers, loginSuccess } = usersReducer.actions;
export default usersReducer.reducer;
