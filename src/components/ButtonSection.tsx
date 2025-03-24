import { selectItems } from '@/redux/breedLoaderSlice';
import { Button } from './ui/button';
import { countDisabled } from '@/redux/countDisabledSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLoading } from '@/redux/loadingSlice';
import { viewDisabled } from '@/redux/viewDisabledSlice';
import { countImagesPerBreed, fetchDogBreeds } from '@/services/BreedService';

function ButtonSection() {
  const items = useAppSelector(selectItems);
  const vwDisabled = useAppSelector(viewDisabled);
  const cntDisabled = useAppSelector(countDisabled);
  const dispatch = useAppDispatch();

  return (
    <div className='flex gap-2'>
      <Button
        variant='outline'
        onClick={() => {
          fetchDogBreeds(dispatch);
        }}
        disabled={vwDisabled}
      >
        View All Dog Breeds
      </Button>
      <Button
        variant='outline'
        onClick={() => {
          countImagesPerBreed(dispatch, items).then(() =>
            dispatch(setLoading())
          );
        }}
        disabled={cntDisabled}
      >
        Count All Dog Breeds by Image
      </Button>
    </div>
  );
}

export default ButtonSection;
