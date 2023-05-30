import { cx } from '~/libs';
import { Text } from '../../Display';

export const Button = ({
  className,
  children,
  textClass,
  ...others
}: React.ComponentProps<'button'> & { textClass?: string }) => {
  return (
    <button
      {...others}
      className={cx(
        'rounded-sm py-3 w-full max-w-[18rem] bg-primary-300',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
    >
      <Text className={cx('text-base text-chalk-50', textClass)}>{children}</Text>
    </button>
  );
};
