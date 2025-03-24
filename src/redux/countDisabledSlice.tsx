import { createSlice } from '@reduxjs/toolkit';
import { DisabledInterface } from '@/assets/interfaces';
import { RootState } from './store';

const initialState: DisabledInterface = {
  disabled: true,
};

export const countDisabledSlice = createSlice({
  name: 'viewDisabled',
  initialState,
  reducers: {
    setCountDisabled: (state) => {
      state.disabled = !state.disabled;
    },
  },
});

export const countDisabled = (state: RootState) => state.countDisabled.disabled;

export const { setCountDisabled } = countDisabledSlice.actions;

export default countDisabledSlice.reducer;
