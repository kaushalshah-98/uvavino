export const LOGOUT = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18.351'
    height='17'
    viewBox='0 0 18.351 17'
    {...props}
  >
    <g id='Group_16443' data-name='Group 16443' transform='translate(-61.361 -72.842)'>
      <path
        id='Path_4480'
        data-name='Path 4480'
        d='M64.761,152.292,62.012,149l2.749-3.295'
        transform='translate(0 -67.84)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='1'
      />
      <line
        id='Line_90'
        data-name='Line 90'
        x1='13.329'
        transform='translate(62.154 81.158)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='1'
      />
      <path
        id='Path_4481'
        data-name='Path 4481'
        d='M214.012,73.342h7.7v16h-7.7'
        transform='translate(-142.5 0)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        stroke-linejoin='round'
        strokeWidth='1'
      />
    </g>
  </svg>
);
