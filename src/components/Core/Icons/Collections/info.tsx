export const INFO = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' {...props}>
    <g id='Group_17100' data-name='Group 17100' transform='translate(-563 -595)'>
      <g id='Group_17078' data-name='Group 17078' transform='translate(-22551 19555)'>
        <g
          id='Ellipse_642'
          data-name='Ellipse 642'
          transform='translate(23114 -18960)'
          fill='none'
          stroke={color ?? 'var(--color-graphite-50'}
          strokeWidth='1'
        >
          <circle cx='10' cy='10' r='10' stroke='none' />
          <circle cx='10' cy='10' r='9.5' fill='none' />
        </g>
        <text
          id='_'
          data-name='?'
          transform='translate(23124 -18944)'
          fill={color ?? 'var(--color-graphite-50'}
          font-size='16'
          font-family='Lato-Medium, Lato'
          font-weight='500'
        >
          <tspan x='-3' y='0'>
            ?
          </tspan>
        </text>
      </g>
    </g>
  </svg>
);
