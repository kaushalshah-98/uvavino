import cx from 'clsx';
import { Button, Icon, Modal, Text } from '../../Core';
import { useEffect, useState } from 'react';
import { noop } from '~/utils';

export const AgeModal = () => {
  const [show, setshow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!localStorage.getItem('age')) {
        setshow(true);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const onAccept = () => {
    localStorage.setItem('age', 'true');
    setshow(false);
  };

  return (
    <Modal className='max-w-md px-24 py-14' open={show} onClose={noop}>
      <div className='flex flex-col text-center items-center justify-center'>
        <Icon name='LOGO' height={'20px'} />

        <Text className='font-semibold text-[32px] mb-2 mt-8' font='playfair'>
          WELCOME!
        </Text>

        <Text className='text-primary-100 text-base'>
          Are you of legal age to consume alcoholic beverages?
        </Text>

        <div className='flex flex-row w-full mt-6 space-x-4'>
          <Button onClick={onAccept}>Yes</Button>
          <Button onClick={onAccept} className='bg-secondary-200 hover:bg-tomato-100 text-chalk-50'>
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
};
