import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Button, Text } from '~/components';
import { cx } from '~/libs';

export const SubHeroSection = () => {
  const { t } = useTranslation(['home']);

  return (
    <section className='relative'>
      <Image
        width={1500}
        height={1500}
        style={{ width: '100%', height: '26rem' }}
        className='object-cover'
        alt='wine'
        src='/images/field-types/subhero.jpg'
      />
      <div
        className={cx(
          'w-full',
          'flex flex-row justify-around',
          'absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2'
        )}
      >
        <div className='flex flex-col space-y-8'>
          <Text
            font='playfair'
            className='text-[32px] block uppercase font-bold text-white tracking-[2.56px]'
          >
            {t('home:subHero.title')}
          </Text>
          <Button
            textClass='text-gray-800 group-hover:text-chalk-50'
            className={cx('uppercase group hover:bg-black bg-white', '')}
          >
            {t('home:subHero.discover')}
          </Button>
        </div>
        <Text className='text-2xl max-w-[38rem] block leading-8 text-white tracking-[0.48px]'>
          {t('home:subHero.subTitle')}
        </Text>
      </div>
    </section>
  );
};
