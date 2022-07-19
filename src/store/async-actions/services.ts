import { createAsyncThunk } from '@reduxjs/toolkit';
import { IServiceItem } from '../../@types/services';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVICES_API}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data: IServiceItem[] = await response.json();
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
