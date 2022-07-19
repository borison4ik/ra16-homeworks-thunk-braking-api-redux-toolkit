import { createAsyncThunk } from '@reduxjs/toolkit';
import { EditServiseItem } from '../../@types/formService';
import { IServiceItem } from '../../@types/services';

export const getService = createAsyncThunk(
  'formService/getService',
  async (id: number, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVICES_API}/${id}`,
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data: IServiceItem = await response.json();
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const editService = createAsyncThunk(
  'formService/editService',
  async (serviceObject: EditServiseItem, thunkAPI) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVICES_API}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceObject),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
