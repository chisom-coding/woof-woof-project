import { Card, CardContent } from '@/components/ui/card';
import { useAppSelector } from '@/redux/hooks';
import { loadingStatus } from '@/redux/loadingSlice';
import { GridCardInterface } from '@/assets/interfaces';

function GridCard({ name, value }: GridCardInterface) {
  const loading = useAppSelector(loadingStatus);
  return (
    <Card className='bg-stone-300 rounded-md'>
      <CardContent className='flex flex-row justify-center'>
        <span className='text-sm font-bold text-center'>
          {name}{' '}
          {loading && (
            <>
              <span className='text-sm'>: </span>
              <span className='text-amber-700 text-sm font-bold'>{value}</span>
            </>
          )}
        </span>
      </CardContent>
    </Card>
  );
}

export default GridCard;
