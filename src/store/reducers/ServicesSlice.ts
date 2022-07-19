import { createSlice } from '@reduxjs/toolkit';
import { IServiceItem } from '../../@types/services';
import { fetchServices } from '../async-actions/services';

export interface IServicesState {
  services: IServiceItem[];
  loading: boolean;
  error: string;
}

const initialState: IServicesState = {
  services: [],
  loading: false,
  error: '',
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchServices.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.services = action.payload;
    },
    [fetchServices.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchServices.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default servicesSlice.reducer;
