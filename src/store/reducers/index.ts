import { combineReducers } from 'redux';
import formServiceReducer from './formServicesSlice';
import servicesReducer from './ServicesSlice';

export const rootReducer = combineReducers({
  servicesReducer,
  formServiceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
