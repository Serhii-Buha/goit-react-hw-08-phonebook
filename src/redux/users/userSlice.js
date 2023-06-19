import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(item => item.id !== payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
