import { useTranslation } from 'next-i18next';
import { Button, ICON_TYPE, Icon, Text } from '~/components';
import { cx } from '~/libs';
import type { TFuncKey } from 'i18next';

type IFeature = {
  label: TFuncKey<'home'>;
  icon: ICON_TYPE;
  description: string;
  href: string;
};

const features: IFeature[] = [
  {
    label: 'features.auction.text',
    icon: 'AUCTIONS',
    description: 'features.auction.description',
    href: '#',
  },
  {
    label: 'features.trade_cellar.text',
    icon: 'TRADE_CELLAR',
    description: 'features.trade_cellar.description',
    href: '#',
  },
  {
    label: 'features.wine_clubs.text',
    icon: 'WINE_CLUBS',
    description: 'features.wine_clubs.description',
    href: '#',
  },
];

export const FeatureSection = () => {
  const { t } = useTranslation(['home']);

  return (
    <div className='flex flex-row justify-evenly py-20'>
      {features.map((feature) => (
        <div key={feature.icon} className='flex flex-col text-center items-center space-y-16'>
          <div className='flex flex-col text-center items-center space-y-6'>
            <Icon className='ml-8' name='AUCTIONS' color='white' />
            <span className='border-b-2 border-white w-16' />
            <Text font='playfair' className='text-white text-2xl tracking-[2.88px]'>
              {t(feature.label as never)}
            </Text>
            <Text className='text-[20px] tracking-[0.6px] text-white max-w-[17rem]'>
              {t(feature.description as never)}
            </Text>
          </div>
          <Button
            textClass='tracking-[0.9px] text-white uppercase'
            className={cx(
              'w-[12rem] py-1.5 ',
              'border-white border bg-transparent',
              'hover:w-[13rem] transition-width duration-300'
            )}
          >
            {t('home:features.more')}
          </Button>
        </div>
      ))}
    </div>
  );
};
