import ChartSection from '@/components/ChartSection';
import GridSection from '@/components/GridSection';
import MainCard from '@/components/MainCard';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { selectItems } from '@/redux/breedLoaderSlice';
import { useAppSelector } from '@/redux/hooks';
import { loadingStatus } from '@/redux/loadingSlice';
import InfoIcon from '@mui/icons-material/Info';

function Home() {
  const items = useAppSelector(selectItems);
  const loading = useAppSelector(loadingStatus);
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-5 gap-4'>
        {items.length > 0 ? (
          <>
            {loading ? (
              <MainCard
                title='Pie Chart View'
                description='View Top 10 dog breeds'
                className='col-span-3'
                children={<ChartSection />}
              />
            ) : null}
            <MainCard
              title='Grid View'
              description='View dog breeds by number of images'
              className={loading ? 'col-span-2' : 'col-span-5'}
              children={<GridSection />}
            />
          </>
        ) : (
          <div className='col-span-3 col-start-2'>
            <Alert variant='info'>
              <InfoIcon />
              <AlertTitle className='underline font-semibold text-lg'>
                Info
              </AlertTitle>
              <AlertDescription className='text-sm'>
                Click the buttons above to interact with the webpage!
              </AlertDescription>
            </Alert>
          </div>
        )}
        {/* <MainCard
          title='Pie Chart View'
          description='View Top 10 dog breeds'
          className='col-span-2'
          children={<ChartSection />}
        />
        <MainCard
          title='Grid View'
          description='View dog breeds by number of images'
          className='col-span-1'
          children={<GridSection />}
        /> */}
        {/* <GridSection /> */}
      </div>
    </div>
  );
}

export default Home;
