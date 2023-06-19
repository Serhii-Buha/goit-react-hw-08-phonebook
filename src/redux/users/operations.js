import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648820480e2469c038fd023c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkApi) => {
    try {
      const responce = await axios.post('/contacts', contactData);
      return responce.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);
      return responce.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
