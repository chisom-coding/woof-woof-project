import { selectItems } from '@/redux/breedLoaderSlice';
import { useAppSelector } from '@/redux/hooks';
import GridCard from './GridCard';
import { loadingStatus } from '@/redux/loadingSlice';

function GridSection() {
  const items = useAppSelector(selectItems);
  const loading = useAppSelector(loadingStatus);
  return (
    <div
      className={`grid ${
        loading ? 'grid-cols-2' : 'grid-cols-4'
      } gap-1 overflow-y-auto overflow-x-hidden max-h-96 border-2 px-4 py-1.5 rounded-lg`}
    >
      {items.map((breed) => (
        <GridCard key={breed.name} name={breed.name} value={breed.value} />
      ))}
    </div>
  );
}

export default GridSection;
