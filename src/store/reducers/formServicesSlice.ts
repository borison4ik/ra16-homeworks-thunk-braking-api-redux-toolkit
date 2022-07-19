import { createSlice } from '@reduxjs/toolkit';
import { EditServiseItem } from '../../@types/formService';
import { editService, getService } from '../async-actions/formService';

interface IFormServiceState {
  service: EditServiseItem;
  completed: boolean;
  sending: boolean;
  loading: boolean;
  errorEdit: string;
}

const initialState: IFormServiceState = {
  service: {
    id: 0,
    name: '',
    price: 0,
    content: '',
  },
  completed: false,
  loading: false,
  sending: false,
  errorEdit: '',
};

export const formServiceReducer = createSlice({
  name: 'formservice',
  initialState,
  reducers: {
    editServiceUncomplete: (state) => {
      state.completed = false;
    },
  },
  extraReducers: {
    [getService.pending.type]: (state) => {
      state.loading = true;
    },
    [getService.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.errorEdit = '';
      state.sending = false;
      state.service = action.payload;
    },
    [getService.rejected.type]: (state, action) => {
      state.loading = false;
      state.sending = false;
      state.errorEdit = action.payload;
    },
    [editService.pending.type]: (state) => {
      state.sending = true;
    },
    [editService.fulfilled.type]: (state) => {
      state.sending = false;
      state.errorEdit = '';
      state.completed = true;
    },
    [editService.rejected.type]: (state, action) => {
      state.sending = false;
      state.errorEdit = action.payload;
      state.completed = false;
    },
  },
});

export default formServiceReducer.reducer;
export const editServiceUncomplete =
  formServiceReducer.actions.editServiceUncomplete;
