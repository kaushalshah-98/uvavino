import Image from 'next/image';
import { Button } from '../../Form';
import { Text } from '../../Display';
import { cx } from '~/libs';

type Props = {
  src: string;
  titleClass?: string;
  title: string;
  count: number;
  imageClass?: string;
};

export const CategoryCard = ({ src, title, titleClass, count, imageClass }: Props) => {
  return (
    <section className='group relative rounded w-full h-full overflow-hidden'>
      <Image
        priority
        width={1000}
        height={1000}
        style={{ width: '100%', height: '100%' }}
        className={cx(
          'object-cover group-hover:scale-110',
          'transition-all duration-500 ease-in-out',
          imageClass
        )}
        alt='wine'
        src={src}
      />
      <div
        className={cx(
          'w-full',
          'flex flex-col items-start justify-end',
          'absolute left-10 -bottom-36',
          'transition-all duration-700 ease-in-out',
          'group-hover:bottom-10'
        )}
      >
        <Text
          font='playfair'
          className={cx(
            'text-[40px] block uppercase font-bold text-white tracking-[5.6px]',
            titleClass
          )}
        >
          {title}
        </Text>
        <Text className='text-2xl block text-white tracking-[3.36px]'>{count} Products</Text>
        <Button
          textClass='tracking-[0.9px] text-sm uppercase text-white'
          className={cx(
            'border-white max-w-[14rem] mt-7 py-1.5 border bg-transparent',
            'hover:scale-105 transition-all duration-300'
          )}
        >
          view all items
        </Button>
      </div>
    </section>
  );
};
