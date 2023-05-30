import { GetStaticProps } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArticleSection,
  CategorySection,
  FeatureSection,
  HeroSection,
  NewAuctionSection,
  RecommendationSection,
  SubHeroSection,
} from '~/components';
import { AppLayout } from '~/layout';

const Home = () => {
  return (
    <AppLayout className=''>
      <section>
        <HeroSection />
      </section>
      <section>
        <SubHeroSection />
      </section>
      <section className='pb-32 pt-20 text-center bg-chalk-50'>
        <RecommendationSection />
      </section>
      <section className='pb-32 pt-20 text-center bg-secondary-50'>
        <NewAuctionSection />
      </section>
      <section className='bg-cover bg-left bg-[url("/images/homepage/barell.png")]'>
        <FeatureSection />
      </section>
      <section className='py-24 text-center bg-chalk-50 px-12'>
        <CategorySection />
      </section>
      <section className='pt-20 pb-40 bg-secondary-50 px-12'>
        <ArticleSection />
      </section>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'header',
        'cookies',
        'confirmModal',
        'footer',
        'home',
        'auctions',
        'auctionPacks',
      ])),
    },
  };
};

export default Home;
