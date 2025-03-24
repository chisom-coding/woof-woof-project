import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import breedReducer from './breedLoaderSlice';
import loadingReducer from './loadingSlice';
import viewDisabledReducer from './viewDisabledSlice';
import countDisabledReducer from './countDisabledSlice';

export const store = configureStore({
  reducer: {
    breeds: breedReducer,
    loading: loadingReducer,
    viewDisabled: viewDisabledReducer,
    countDisabled: countDisabledReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
