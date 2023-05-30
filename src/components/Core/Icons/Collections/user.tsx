export const USER = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16.894'
    height='17.564'
    viewBox='0 0 16.894 17.564'
    {...props}
  >
    <g id='Group_17316' data-name='Group 17316' transform='translate(-1557.401 -13.4)'>
      <circle
        id='Ellipse_387'
        data-name='Ellipse 387'
        cx='4.212'
        cy='4.212'
        r='4.212'
        transform='translate(1561.635 14)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='1.2'
      />
      <path
        id='Path_2485'
        data-name='Path 2485'
        d='M63.4,622.456a7.847,7.847,0,0,1,15.694,0Z'
        transform='translate(1494.604 -592.092)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='1.2'
      />
    </g>
  </svg>
);
