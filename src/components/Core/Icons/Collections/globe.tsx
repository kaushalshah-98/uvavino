export const GLOBE = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    id='Group_2880'
    data-name='Group 2880'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...props}
  >
    <rect id='Rectangle_1740' data-name='Rectangle 1740' width='24' height='24' fill='none' />
    <g id='Group_780' data-name='Group 780' transform='translate(4 4)'>
      <circle
        id='Ellipse_169'
        data-name='Ellipse 169'
        cx='8'
        cy='8'
        r='8'
        transform='translate(0 0)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='0.75'
      />
      <path
        id='Path_1814'
        data-name='Path 1814'
        d='M765.943,641.838a9.491,9.491,0,0,1,0,16'
        transform='translate(-757.941 -641.837)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='0.75'
      />
      <path
        id='Path_1815'
        data-name='Path 1815'
        d='M765.941,657.839a9.491,9.491,0,0,1,0-16'
        transform='translate(-757.941 -641.837)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='0.75'
      />
      <line
        id='Line_5'
        data-name='Line 5'
        y2='16'
        transform='translate(8 0)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='0.75'
      />
      <line
        id='Line_6'
        data-name='Line 6'
        x1='15.154'
        transform='translate(0.423 10.668)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='0.75'
      />
      <line
        id='Line_7'
        data-name='Line 7'
        x1='15.154'
        transform='translate(0.423 5.335)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='0.75'
      />
    </g>
  </svg>
);
