export const PLUS = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' {...props}>
    <g id='Group_16827' data-name='Group 16827' transform='translate(-1256 -1912)'>
      <line
        id='Line_198'
        data-name='Line 198'
        y2='28'
        transform='translate(1270 1912)'
        fill='none'
        stroke={color ?? 'var(--color-chalk-50)'}
        strokeWidth='2'
      />
      <line
        id='Line_199'
        data-name='Line 199'
        x1='28'
        transform='translate(1256 1926)'
        fill='none'
        stroke={color ?? 'var(--color-chalk-50)'}
        strokeWidth='2'
      />
    </g>
  </svg>
);
