import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GitHubApi } from "../api/gitHubApi/gitHubApi"
import { GhUser } from "../types/users";

export const fetchUsers = createAsyncThunk('fetchUsers', async (userName: string) => {
  const users = await GitHubApi.fetchUsersNames(userName);
  return users;
});

export const fetchUserRepositories = createAsyncThunk('fetchUsersRepositories', async (userName: string) => {
  const repositories = await GitHubApi.fetchReposByUserLogin(userName);
  return {
    repositories,
    userName
  };
});

export const SAVE_USERS = "SAVE_USERS";
export const initialState: {
  users: GhUser[]
} = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(fetchUserRepositories.fulfilled, (state, action) => {
      state.users = state.users.map(user => {
        if (user.login === action.payload.userName) {
          return {
            ...user,
            repositories: action.payload.repositories
          };
        } else {
          return user;
        }
      })
    })
  },
});

export const userReducer = userSlice.reducer;