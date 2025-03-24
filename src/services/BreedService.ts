import Api from '@/api/Api';
import { BreedData } from '@/assets/interfaces';
import { loadData, updateBreedCount } from '@/redux/breedLoaderSlice';
import { setCountDisabled } from '@/redux/countDisabledSlice';
import { setViewDisabled } from '@/redux/viewDisabledSlice';
import axios from 'axios';

// const items = useAppSelector(selectItems);
// const dispatch = useAppDispatch();

export const fetchDogBreeds = async (dispatch: any) => {
  try {
    const breedResponse = await Api.get('/breeds/list/all');
    const breedData = await breedResponse.data;

    dispatch(loadData(Object.keys(breedData.message)));
    dispatch(setViewDisabled());
    dispatch(setCountDisabled());
  } catch (error) {
    console.error('Error while fetching dog breeds data:', error);
  }
};

export const countImagesPerBreed = async (
  dispatch: any,
  items: BreedData[]
) => {
  try {
    await axios.all(
      items.map(async (breed) => {
        const imgResponse = await Api.get(`breed/${breed.name}/images`);
        const imgData = await imgResponse.data;
        dispatch(
          updateBreedCount({
            breed: breed.name,
            count: imgData.message.length,
          })
        );
      })
    );
    dispatch(setCountDisabled());
  } catch (error) {
    console.error('Error while fetching dog image data:', error);
  }
};
