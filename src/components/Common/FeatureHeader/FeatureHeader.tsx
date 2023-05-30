import { CustomMenuItem, FilterMenu, Icon, Text } from '~/components';
import { Breadcrumb } from '~/components';
import { cx } from '~/libs';
import { useState } from 'react';
import { VIEW_MODE } from '~/config';

type Props = {
  title: string;
  titleClass?: string;
  activePage?: string;
  children?: React.ReactNode;
  onModeChange: (mode: VIEW_MODE) => void;
  activeId?: number;
  options?: CustomMenuItem[];
  onFilterChange: (item: CustomMenuItem) => void;
};

const defaultOptions = [
  { id: 1, label: { name: 'Most Recent' } },
  { id: 2, label: { name: 'Older' } },
  { id: 3, label: { name: 'Best Sellers' } },
  { id: 4, label: { name: 'Price: Cheaper to Most Expensive' } },
  { id: 5, label: { name: 'Price: Most Expensive to Cheaper' } },
  { id: 6, label: { name: 'Premium' } },
  { id: 7, label: { name: 'Single Lot' } },
  { id: 8, label: { name: 'Discount' } },
  { id: 9, label: { name: 'A - Z' } },
  { id: 10, label: { name: 'Z - A' } },
];

export const FeatureHeader = ({
  children,
  options = defaultOptions,
  activePage = '',
  activeId,
  onModeChange,
  onFilterChange,
  titleClass,
  title,
}: Props) => {
  const [viewType, setViewType] = useState<VIEW_MODE>(VIEW_MODE.GRID);

  const handleModeChange = (mode: VIEW_MODE) => {
    setViewType(mode);
    onModeChange(mode);
  };

  const handleFilterChange = (item: CustomMenuItem) => {
    onFilterChange(item);
  };

  return (
    <>
      <section className='flex justify-between items-center'>
        <Breadcrumb activePage={activePage} />
        {children}
      </section>
      <section className='flex justify-between items-center mt-11'>
        <Text className={cx('text-[40px] font-bold tracking-[2px] text-primary-300 ', titleClass)}>
          {title}
        </Text>
        <div className='flex items-center space-x-5'>
          <section className='flex items-center space-x-3'>
            <Icon
              name='GRID'
              className={cx('text-primary-400 cursor-pointer', {
                'opacity-10': viewType !== VIEW_MODE.GRID,
              })}
              onClick={() => handleModeChange(VIEW_MODE.GRID)}
            />
            <Icon
              name='GRID_TWO'
              className={cx('text-primary-400 cursor-pointer', {
                'opacity-50': viewType !== VIEW_MODE.LIST,
              })}
              onClick={() => handleModeChange(VIEW_MODE.LIST)}
            />
          </section>
          <div className=''>
            <FilterMenu activeId={activeId} onChange={handleFilterChange} options={options} />
          </div>
        </div>
      </section>
    </>
  );
};
