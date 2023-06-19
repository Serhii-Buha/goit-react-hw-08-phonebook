import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/users/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
