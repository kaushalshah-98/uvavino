import { useTranslation } from 'next-i18next';
import { Text } from '~/components';

export const RecommendationSection = () => {
  const { t } = useTranslation(['home']);

  return (
    <section>
      <Text className='text-3xl uppercase tracking-[3.36px]'>{t('home:recommended')}</Text>
    </section>
  );
};
