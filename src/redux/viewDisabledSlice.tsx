import { createSlice } from '@reduxjs/toolkit';
import { DisabledInterface } from '@/assets/interfaces';
import { RootState } from './store';

const initialState: DisabledInterface = {
  disabled: false,
};

export const viewDisabledSlice = createSlice({
  name: 'viewDisabled',
  initialState,
  reducers: {
    setViewDisabled: (state) => {
      state.disabled = !state.disabled;
    },
  },
});

export const viewDisabled = (state: RootState) => state.viewDisabled.disabled;

export const { setViewDisabled } = viewDisabledSlice.actions;

export default viewDisabledSlice.reducer;
