export const LINE_LEFT = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='62' height='5' viewBox='0 0 62 5' {...props}>
    <g id='Group_16206' data-name='Group 16206' transform='translate(-0.384 -0.425)'>
      <line
        id='Line_148'
        data-name='Line 148'
        x1='57'
        transform='translate(5.384 2.425)'
        fill='none'
        stroke={color ?? 'var(--color-primary-50)'}
        strokeWidth='1'
      />
      <g
        id='Ellipse_683'
        data-name='Ellipse 683'
        transform='translate(0.384 0.425)'
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
