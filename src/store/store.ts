import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import { userReducer } from './users.reducer';

export const store = configureStore({
  reducer: {
    userReducer
  },
  middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector = (cb: (state: RootState) => unknown) => useSelector<RootState>(cb);