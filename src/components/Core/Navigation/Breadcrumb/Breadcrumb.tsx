import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cx } from '~/libs';
import { ROUTES } from '~/config';
import { Text } from '../../Display';
import { BsChevronRight } from 'react-icons/bs';

interface IBreadcrumb {
  href: string;
  label: string;
}

interface BreadcrumbProps {
  activePage: string;
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { activePage } = props;
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();
    pathArray = pathArray.filter((path) => !['', '#'].includes(path));
    let breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      const label = path.charAt(0).toUpperCase() + path.slice(1);
      return {
        href,
        label: label.replace('-', ' '),
      };
    });
    breadcrumbs = breadcrumbs.filter((b) => b.label.length > 1);
    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <div className='flex flex-row items-center space-x-2'>
      <Link className='' href={ROUTES.MAIN}>
        <Text className={cx('text-primary-300 text-base tracking-[0.7px]', 'hover:underline')}>
          Uvavino
        </Text>
      </Link>
      {breadcrumbs.map((breadcrumb, i) => {
        const isLast = i === breadcrumbs.length - 1;

        return (
          <Link
            key={breadcrumb.href}
            className='space-x-2 items-center flex flex-row'
            href={breadcrumb.href}
          >
            <Text className='font-light'>
              <BsChevronRight className='w-3 h-3' />
            </Text>
            <Text className={cx('text-primary-300 text-base tracking-[0.7px] hover:underline')}>
              {breadcrumb.label}
            </Text>
            {isLast && activePage && (
              <Text className='text-base'>
                <BsChevronRight className='w-3 h-3' />
              </Text>
            )}
          </Link>
        );
      })}
      {activePage && (
        <Text className={cx('text-primary-300 text-sm tracking-[0.7px] opacity-50')}>
          {activePage}
        </Text>
      )}
    </div>
  );
};
