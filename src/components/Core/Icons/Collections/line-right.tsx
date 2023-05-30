export const LINE_RIGHT = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='76' height='5' viewBox='0 0 76 5' {...props}>
    <g id='Group_16205' data-name='Group 16205' transform='translate(0.378 0.491)'>
      <line
        id='Line_146'
        data-name='Line 146'
        x1='71'
        transform='translate(-0.378 2.509)'
        fill='none'
        stroke={color ?? 'var(--color-primary-50)'}
        strokeWidth='1'
      />
      <g
        id='Ellipse_684'
        data-name='Ellipse 684'
        transform='translate(70.622 -0.491)'
        fill='none'
        stroke={color ?? 'var(--color-primary-50)'}
        strokeWidth='1'
      >
        <circle cx='2.5' cy='2.5' r='2.5' stroke='none' />
        <circle cx='2.5' cy='2.5' r='2' fill='none' />
      </g>
    </g>
  </svg>
);
