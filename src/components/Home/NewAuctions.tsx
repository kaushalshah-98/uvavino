import { useTranslation } from 'next-i18next';
import { Text } from '~/components';

export const NewAuctionSection = () => {
  const { t } = useTranslation(['home']);

  return (
    <section>
      <Text className='text-3xl uppercase tracking-[3.36px]'>{t('home:newest_auctions')}</Text>
    </section>
  );
};
