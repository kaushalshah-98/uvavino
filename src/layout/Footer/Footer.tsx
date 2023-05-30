import { TFuncKey } from 'i18next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { memo } from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { TfiFacebook } from 'react-icons/tfi';
import { Button, Icon, Text } from '~/components';
import { cx } from '~/libs';

const usefulLinks: Array<{ label: TFuncKey<'footer'>; link: string }> = [
  { label: 'useful.auctions', link: '#' },
  { label: 'useful.trade_cellars', link: '#' },
  { label: 'useful.wine_clubs', link: '#' },
  { label: 'useful.articles', link: '#' },
];

const moreLinks: Array<{ label: TFuncKey<'footer'>; link: string }> = [
  { label: 'more.about_us', link: '#' },
  { label: 'more.contact_us', link: '#' },
  { label: 'more.terms_and_use', link: '#' },
  { label: 'more.privacy_plicy', link: '#' },
];

const socialIcons = [{ icon: BsInstagram }, { icon: BsTwitter }, { icon: TfiFacebook }];

const FooterComponent = (props: React.ComponentProps<'div'>) => {
  const { t } = useTranslation(['footer']);

  return (
    <div
      className={cx(
        'bottom-0',
        'w-full bg-chalk-50 px-24 pt-20',
        'border border-t-2 border-secondary-100',
        'flex flex-col w-full space-y-0',
        props.className
      )}
    >
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <Text className='uppercase text-lg text-primary-300 font-semibold'>
            {t('footer:useful.text')}
          </Text>
          <div className='flex flex-col space-y-1.5 mt-4 ml-2'>
            {usefulLinks.map((item) => (
              <Link
                className='group transition-all duration-300 ease-in-out'
                key={item.label}
                href={item.link}
              >
                <Text className={cx('text-lg font-normal text-primary-300 hover:underline')}>
                  {t(item.label as never)}
                </Text>
              </Link>
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <Text className='uppercase text-lg text-primary-300 font-semibold'>
            {t('footer:more.text')}
          </Text>
          <div className='flex flex-col space-y-1.5 mt-4 ml-2'>
            {moreLinks.map((item) => (
              <Link
                className='group transition-all duration-300 ease-in-out'
                key={item.label}
                href={item.link}
              >
                <Text className={cx('text-lg text-primary-300 font-normal hover:underline')}>
                  {t(item.label as never)}
                </Text>
              </Link>
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <Text className='uppercase text-lg font-semibold'>{t('footer:support.text')}</Text>
          <div className='flex flex-col space-y-1 mt-4'>
            <Text className='text-lg text-primary-300 font-normal'>{t('footer:support.info')}</Text>
            <Text className='text-lg text-primary-300 font-normal'>+351 888 888 888</Text>
          </div>
        </div>

        <div className='flex flex-col'>
          <Text className='uppercase text-lg text-primary-300 font-semibold'>
            {t('footer:newsletter.text')}
          </Text>
          <div className='flex flex-col space-y-1 mt-4'>
            <Text className='text-lg text-primary-300'>{t('footer:newsletter.description')}</Text>
          </div>

          <br />
          <br />

          <Button textClass='uppercase'>{t('footer:subscribe')}</Button>

          <div className='flex mt-10 ml-4 flex-row space-x-12'>
            {socialIcons.map((item, idx) => (
              <item.icon key={idx} className='h-6 w-6 text-primary-100'></item.icon>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center space-x-4'>
        <Icon className='' height={100} width={100} name='LOGO' />
        <Text className='text-xs mt-1 text-primary-100'>{t('footer:copyright')}</Text>
      </div>
    </div>
  );
};

export const Footer = memo(FooterComponent);
