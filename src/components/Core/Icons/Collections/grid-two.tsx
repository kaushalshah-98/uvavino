export const GRID_TWO = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='23' height='23' viewBox='0 0 23 23' {...props}>
    <g id='Group_16808' data-name='Group 16808' transform='translate(-1)' opacity='0.5'>
      <g
        id='Rectangle_1859'
        data-name='Rectangle 1859'
        transform='translate(1)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='1.5'
      >
        <rect width='23' height='11' rx='1' stroke='none' />
        <rect x='0.75' y='0.75' width='21.5' height='9.5' rx='0.25' fill='none' />
      </g>
      <g
        id='Rectangle_1861'
        data-name='Rectangle 1861'
        transform='translate(1 12)'
        fill='none'
        stroke={color ?? 'var(--color-primary-300)'}
        strokeWidth='1.5'
      >
        <rect width='23' height='11' rx='1' stroke='none' />
        <rect x='0.75' y='0.75' width='21.5' height='9.5' rx='0.25' fill='none' />
      </g>
    </g>
  </svg>
);
