export const EYE = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18.748'
    height='8.257'
    viewBox='0 0 18.748 8.257'
    {...props}
  >
    <g id='Group_3582' data-name='Group 3582' transform='translate(-886.122 -404.371)'>
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
    </g>
  </svg>
);
