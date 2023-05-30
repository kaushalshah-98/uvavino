import { Lato, Playfair_Display } from 'next/font/google';
import { cx } from '~/libs';

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ['latin-ext'] });
const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

type Fonts = 'lato' | 'playfair';
type TextProps = React.ComponentProps<'span'> & {
  font?: Fonts;
};

const fontClassNames: Record<Fonts, string> = {
  lato: lato.className,
  playfair: playfair.className,
};

export const Text = ({ className, children, font = 'lato', ...others }: TextProps) => {
  return (
    <span {...others} className={cx(fontClassNames[font], 'text-base text-primary-300', className)}>
      {children}
    </span>
  );
};
