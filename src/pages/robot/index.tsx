import React from 'react';
import { increment, decrement } from '~/store-actions';
import { useAppSelector, useAppDispatch } from '~/store';
import { Robotlist } from '~/components';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='flex flex-col justify-center h-screen items-center'>
      <div className='flex flex-row space-x-8 items-center'>
        <button
          className='p-2 bg-blue-500 text-white text-lg rounded-lg'
          aria-label='Increment value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span className='text-3xl text-gray-600'>{count}</span>
        <button
          className='p-2 bg-blue-500 text-white text-lg rounded-lg'
          aria-label='Decrement value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <div>
        <h1>Robots</h1>
        <div className='mt-4'>
          <Robotlist />
        </div>
      </div>
    </div>
  );
};

export default Counter;
