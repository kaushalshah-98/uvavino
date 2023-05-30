export const SEARCH = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    id='Group_2878'
    data-name='Group 2878'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...props}
  >
    <g id='Group_1089' data-name='Group 1089' transform='translate(4 4)'>
      <circle
        id='Ellipse_171'
        data-name='Ellipse 171'
        cx='7.264'
        cy='7.264'
        r='7.264'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='1'
      />
      <line
        id='Line_63'
        data-name='Line 63'
        x1='3.706'
        y1='3.706'
        transform='translate(12.294 12.294)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='1'
      />
    </g>
    <rect id='Rectangle_1802' data-name='Rectangle 1802' width='24' height='24' fill='none' />
  </svg>
);
