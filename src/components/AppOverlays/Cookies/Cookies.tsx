import cx from 'clsx';
import { Button, Text } from '../../Core';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { LANGUAGES } from '~/config';

export const Cookies = () => {
  const { t } = useTranslation(['cookies']);
  const [show, setshow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!localStorage.getItem('cookies')) {
        setshow(true);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const onAccept = () => {
    localStorage.setItem('cookies', 'true');
    setshow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={cx('fixed w-full bottom-0 z-50', 'transition-all duration-500')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={cx(
              'flex-row flex w-full items-center justify-between bg-chalk-50 rounded px-28 py-6',
              'shadow-sm border border-secondary-200'
            )}
          >
            <Text className='max-w-xl text-sm text-primary-500'>{t('cookies:description')}</Text>
            <div className='flex flex-col justify-between items-center space-y-6'>
              <Button
                onClick={onAccept}
                textClass='uppercase px-32 text-sm'
                className='max-w-[200rem] '
              >
                {t('cookies:accept_all_cookies')}
              </Button>
              <a className='uppercase text-sm hover:underline text-primary-500'>
                {t('cookies:setting_cookies')}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
