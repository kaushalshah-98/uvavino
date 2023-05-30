import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Button, Text } from '~/components';
import { cx } from '~/libs';

export const HeroSection = () => {
  const { t } = useTranslation(['home']);

  return (
    <section className='relative'>
      <div className='absolute inset-0 w-full h-full bg-gradient-to-br from-black/20 via-black/50 to-black/80'></div>
      <Image
        priority
        width={1000}
        height={1000}
        style={{ width: '100%', height: 'calc(100% - 8rem)' }}
        className='object-cover bg-center'
        alt='wine'
        src='/images/homepage/hero.jpg'
      />
      <div
        className={cx(
          'w-full max-w-5xl',
          'flex flex-col space-y-12 items-center',
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        )}
      >
        <Text
          font='playfair'
          className='text-3xl block uppercase font-bold text-white tracking-[2.56px]'
        >
          {t('home:hero.title')}
        </Text>
        <Text className='text-2xl block text-white tracking-[0.48px]'>
          {t('home:hero.subTitle')}
        </Text>

        <Button
          textClass='tracking-[0.9px] text-sm text-white'
          className={cx(
            'border-white border bg-transparent',
            'hover:scale-110 transition-all duration-300'
          )}
        >
          {t('home:hero.read_article')}
        </Button>
      </div>
    </section>
  );
};
