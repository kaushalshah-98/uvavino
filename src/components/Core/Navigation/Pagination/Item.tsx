import { memo } from 'react';
import { cx } from '~/libs';
import { Text } from '../../Display';

export type ItemProps = {
  changePage?: (page: number) => void;
  className?: string;
  numberArray: number[];
  totalRecords: number;
  page: number;
};

const ItemCount = ({
  page,
  className,
  children,
  ...others
}: React.ComponentProps<'button'> & { page: number }) => {
  return (
    <button
      aria-label={'page count'}
      className={cx(
        'w-8 cursor-pointer text-lg text-primary-300',
        {
          'opacity-50': page !== children,
        },
        className
      )}
      {...others}
    >
      {children}
    </button>
  );
};

const ItemComponent = ({ page, totalRecords, changePage, numberArray, className }: ItemProps) => {
  const handlePageChange = (x: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (changePage) {
      changePage(x);
    }
  };

  const list = numberArray.map((x: number, i: number) => (
    <ItemCount
      page={page}
      key={i}
      className={className}
      onClick={(event) => handlePageChange(x, event)}
    >
      {x}
    </ItemCount>
  ));

  return (
    <div className='flex items-center'>
      {!numberArray.includes(1) && (
        <>
          <ItemCount
            page={page}
            className={className}
            onClick={(event) => handlePageChange(1, event)}
          >
            1
          </ItemCount>

          <Text className='text-primary-200 text-center w-8 text-lg'>...</Text>
        </>
      )}
      {list}
      {!numberArray.includes(totalRecords) && (
        <>
          <Text className='text-primary-200 text-center w-8 text-lg'>...</Text>
          <ItemCount
            page={page}
            className={className}
            onClick={(event) => handlePageChange(totalRecords, event)}
          >
            {totalRecords}
          </ItemCount>
        </>
      )}
    </div>
  );
};

export const Item = memo(ItemComponent) as typeof ItemComponent;
