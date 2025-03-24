import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '@/assets/interfaces';
import { RootState } from './store';

const initialState: LoadingState = {
  loadingStatus: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loadingStatus = !state.loadingStatus;
    },
  },
});

export const loadingStatus = (state: RootState) => state.loading.loadingStatus;

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
