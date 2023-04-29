import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://639a14a416b0fdad7753a72e.mockapi.io/api/v1';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=${page}&limit=6`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
