import { memo, useEffect, useMemo, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { cx } from '~/libs';
import { range } from '~/utils';
import { Item } from './Item';
import { Button } from '../../Form';

export type PaginationProps = {
  changePage: (page: number) => void;
  className?: string;
  limit?: number;
  numbersToShow?: number;
  page: number;
  totalRecords: number;
  wrapperClass?: string;
};

const PaginationComponent = (props: PaginationProps) => {
  const {
    totalRecords = 0,
    page = 1,
    wrapperClass,
    numbersToShow = 2,
    changePage,
    limit = 1,
    className,
  } = props;

  const [numberArray, setNumberArray] = useState<number[]>([1]);
  const start = numberArray[0];

  const end = numberArray[numberArray.length - 1];
  let right = numbersToShow && numberArray[numbersToShow - 1];

  const totalPages = useMemo(() => Math.ceil(totalRecords / limit), [limit, totalRecords]);

  useEffect(() => {
    setNumberArray(
      totalPages > numbersToShow
        ? [...Array.from(Array(numbersToShow ? numbersToShow : 4), (_, i) => i + 1)]
        : [...Array.from(Array(totalPages || 0), (_, i) => i + 1)]
    );
  }, [numbersToShow, totalPages]);

  const Previous = (event: React.MouseEvent) => {
    event.preventDefault();

    if (page <= 1) {
      return;
    }
    if (page - 1 < start) {
      if (end === totalPages) {
        right = start - 1;
      } else {
        right = right - numbersToShow;
      }
      const numArr = range(start - numbersToShow, right);
      setNumberArray([...numArr]);
    }

    changePage(page - 1);
  };

  const Next = (event: React.MouseEvent) => {
    event.preventDefault();

    if (page >= totalPages) {
      return;
    }

    if (page + 1 > end) {
      if (right + numbersToShow >= totalPages) {
        right = totalPages;
      } else {
        right = right + numbersToShow;
      }
      const numArr = range(start + numbersToShow, right);
      setNumberArray([...numArr]);
    }
    changePage(page + 1);
  };

  const handleChangePage = (newPage: number) => {
    if (newPage === 1) {
      const numArr = range(1, numbersToShow ? numbersToShow : 4);
      setNumberArray([...numArr]);
    } else if (newPage === totalRecords) {
      const numArr = range(totalRecords - numbersToShow + 1, totalRecords);
      setNumberArray([...numArr]);
    }

    changePage(newPage);
  };

  if (!totalRecords) return null;

  return (
    <nav className={cx('flex flex-row justify-center items-center space-x-4', wrapperClass)}>
      <Button
        aria-label='Next'
        onClick={Previous}
        className={cx('py-2.5 rounded max-w-fit px-6', {
          'cursor-not-allowed opacity-30': page <= 1,
        })}
        textClass={cx('flex flex-row justify-center items-center space-x-3')}
      >
        {/* <Text className='text-chalk-50'>Next</Text> */}
        <BsChevronLeft />
      </Button>

      <Item
        changePage={handleChangePage}
        totalRecords={totalRecords}
        className={className}
        numberArray={numberArray}
        page={page}
      />
      <Button
        aria-label='Next'
        onClick={Next}
        className={cx('py-2.5 rounded max-w-fit px-6', {
          'cursor-not-allowed opacity-30': page >= totalPages,
        })}
        textClass={cx('flex flex-row justify-center items-center space-x-3')}
      >
        {/* <Text className='text-chalk-50'>Next</Text> */}
        <BsChevronRight />
      </Button>
    </nav>
  );
};

export const Pagination = memo(PaginationComponent) as typeof PaginationComponent;
