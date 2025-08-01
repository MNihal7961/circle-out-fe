import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loadAuth } from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

store.dispatch(loadAuth());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export { useDispatch, useSelector } from 'react-redux'; 