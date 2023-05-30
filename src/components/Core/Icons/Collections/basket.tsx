export const BASKET = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14.808'
    height='21.001'
    viewBox='0 0 14.808 21.001'
    {...props}
  >
    <g id='Group_3372' data-name='Group 3372' transform='translate(-1432.905 -11.5)'>
      <path
        id='Path_2490'
        data-name='Path 2490'
        d='M104.771,127.653H91l.562-15.553H104.2Z'
        transform='translate(1342.424 -95.652)'
        fill='none'
        stroke={color ?? 'var(--color-graphite-100)'}
        strokeWidth='1'
      />
      <path
        id='Path_2491'
        data-name='Path 2491'
        d='M154.308,48.661V45a3.3,3.3,0,1,0-6.608,0v3.658'
        transform='translate(1289.305 -29.7)'
        fill='none'
        stroke={color ?? 'var(--color-graphite-100)'}
        strokeWidth='1'
      />
    </g>
  </svg>
);
