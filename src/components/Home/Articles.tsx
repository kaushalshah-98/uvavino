import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Text } from '~/components';
import { cx } from '~/libs';

type IArticle = {
  src: string;
  title: string;
  description: String;
  link: string;
  id: number;
};

const articles: IArticle[] = [
  {
    id: 1,
    title: 'Why you should be paying attention to German wine.',
    src: '/images/blogs/blog1.png',
    description:
      'Wine Consumption, as wine is not only enjoyed with meals but also as an aperitif.',
    link: '#',
  },
  {
    id: 2,
    title: 'Why you should be paying attention to German wine.',
    src: '/images/blogs/blog2.jpg',
    description:
      'Wine Consumption, as wine is not only enjoyed with meals but also as an aperitif.',
    link: '#',
  },
  {
    id: 3,
    title: 'Why you should be paying attention to German wine.',
    src: '/images/blogs/blog3.png',
    description:
      'Wine Consumption, as wine is not only enjoyed with meals but also as an aperitif.',
    link: '#',
  },
];

export const ArticleSection = () => {
  const { t } = useTranslation(['home']);

  return (
    <>
      <div className='w-full text-center'>
        <Text className='text-3xl uppercase tracking-[3.36px]'>
          {t('home:articles.latest_articles')}
        </Text>
      </div>
      <div className='flex flex-row space-x-8 mt-16'>
        {articles.map((article) => (
          <div
            key={article.id}
            className={cx(
              'h-auto group flex flex-col space-y-3 py-8 px-5 rounded',
              'hover:shadow-card hover:bg-chalk-50'
            )}
          >
            <div className='overflow-hidden'>
              <Image
                priority
                width={500}
                height={500}
                style={{ width: '100%', height: '25rem' }}
                className={cx(
                  'object-cover',
                  'rounded group-hover:scale-105',
                  'transition-all duration-500'
                )}
                alt='wine'
                src={article.src}
              />
            </div>
            <Text className='text-primary-300 font-bold tracking-[1.08px] text-lg'>
              {article.title}
            </Text>
            <Text className='text-primary-300 text-base tracking-[0.48px]'>
              {article.description}
            </Text>
            <Text className='text-sm cursor-pointer tracking-[0.42px] underline font-semibold'>
              {t('home:articles.read_more')}
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};
