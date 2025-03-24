import { selectItems } from '@/redux/breedLoaderSlice';
import { useAppSelector } from '@/redux/hooks';
import { loadingStatus } from '@/redux/loadingSlice';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function ChartSection() {
  const items = useAppSelector(selectItems);
  const loading = useAppSelector(loadingStatus);

  const COLORS = ['#FFE3C1', '#ECB595', '#BD8A6B', '#906144', '#653A20'];

  const sortedItems = [...items].sort((a, b) => b.value - a.value).slice(0, 10);

  return (
    <div className='flex justify-center'>
      {loading ? (
        <PieChart width={400} height={400}>
          <Pie
            data={sortedItems}
            cx={200}
            cy={200}
            outerRadius={150}
            fill='#8884d8'
            dataKey='value'
            label
          >
            {items.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      ) : null}
    </div>
  );
}

export default ChartSection;
