import { useState } from 'react';
import { Accordion } from '../Core/Display';
import { cx } from '~/libs';
import { Button, Text } from '../Core';
import { useAppSelector } from '~/store';

const allFilters = [
  {
    title: 'Price',
    component: (
      <>
        <Text> Price test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Cellars',
    component: (
      <>
        <Text> Cellars test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Type of Wine',
    component: (
      <>
        <Text> type of wine test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Country',
    component: (
      <>
        <Text> country test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Region',
    component: (
      <div className='my-2 grid grid-cols-3 gap-2'>
        <Button className='w-auto py-1 rounded'>Douro</Button>
        <Button
          className='w-auto border rounded border-secondary-200 py-1 bg-secondary-50'
          textClass='text-primary-400'
        >
          Dão
        </Button>
        <Button
          className='w-auto border rounded border-secondary-200 py-1 bg-secondary-50'
          textClass='text-primary-400'
        >
          Alentejo
        </Button>
        <Button
          className='w-auto border rounded border-secondary-200 py-1 bg-secondary-50'
          textClass='text-primary-400'
        >
          Alentejo
        </Button>
        <Button
          className='w-auto border rounded border-secondary-200 py-1 bg-secondary-50'
          textClass='text-primary-400'
        >
          Dão
        </Button>
        <Button
          className='w-auto border rounded border-secondary-200 py-1 bg-secondary-50'
          textClass='text-primary-400'
        >
          Douro
        </Button>
      </div>
    ),
  },
  {
    title: 'Brand',
    component: (
      <>
        <Text> Brand test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Bottle Size',
    component: (
      <>
        <Text> bottle test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Year',
    component: (
      <>
        <Text> Year test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Capacity',
    component: (
      <>
        <Text> Capacity test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Varieties',
    component: (
      <>
        <Text> Varieties test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
  {
    title: 'Wine tags',
    component: (
      <>
        <Text> Wine test1</Text>
        <Text>test2</Text>
      </>
    ),
  },
];

export const AuctionFilters = () => {
  const [activeFilter, setActiveFiler] = useState<string>();
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div>
      {allFilters.map((filter, i) => {
        return (
          <Accordion
            key={filter.title}
            title={filter.title}
            open={activeFilter === filter.title}
            onClick={() => setActiveFiler(activeFilter === filter.title ? '' : filter.title)}
            className={cx('', i === 0 ? 'border-y' : 'border-b', {
              'border-gray-600': theme === 'dark-theme',
              'border-secondary-200': theme !== 'dark-theme',
            })}
          >
            {filter.component}
          </Accordion>
        );
      })}
    </div>
  );
};
