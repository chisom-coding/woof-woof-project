import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BreedState } from '@/assets/interfaces';
import { RootState } from './store';

const initialState: BreedState = {
  items: [],
};

export const breedLoaderSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload.map((breed) => ({ name: breed, value: 0 }));
    },
    updateBreedCount: (
      state,
      action: PayloadAction<{ breed: string; count: number }>
    ) => {
      const breed = state.items.find(
        (item) => item.name === action.payload.breed
      );
      if (breed) {
        breed.value = action.payload.count;
      }
    },
  },
});

export const selectItems = (state: RootState) => state.breeds.items;

export const { loadData, updateBreedCount } = breedLoaderSlice.actions;

export default breedLoaderSlice.reducer;
