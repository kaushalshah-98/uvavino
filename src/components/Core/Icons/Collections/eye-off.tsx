export const EYE_OFF = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18.749'
    height='10.322'
    viewBox='0 0 18.749 10.322'
    {...props}
  >
    <g id='Group_722' data-name='Group 722' transform='translate(-886.122 -404.079)'>
      <circle
        id='Ellipse_616'
        data-name='Ellipse 616'
        cx='3.386'
        cy='3.386'
        r='3.386'
        transform='translate(892.14 405.857)'
        fill={color ?? 'var(--color-primary-400)'}
      />
      <path
        id='Path_4238'
        data-name='Path 4238'
        d='M68.7,148.631a10.116,10.116,0,0,1,17-.1'
        transform='translate(818.3 261.421)'
        fill='none'
        stroke={color ?? 'var(--color-primary-400)'}
        strokeWidth='2'
      />
      <path
        id='Path_4426'
        data-name='Path 4426'
        d='M68.7,148.631l8.935-.1H85.7'
        transform='translate(902.934 241.967) rotate(30)'
        fill='none'
        stroke={color ?? 'var(--color-primary-400)'}
        strokeWidth='2'
      />
    </g>
  </svg>
);
