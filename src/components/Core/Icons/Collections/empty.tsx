export const EMPTY = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='66.533'
    height='66.81'
    viewBox='0 0 66.533 66.81'
    {...props}
  >
    <g id='Group_16845' data-name='Group 16845' transform='translate(-63.746 -62.5)'>
      <line
        id='Line_202'
        data-name='Line 202'
        x2='19.879'
        y2='19.902'
        transform='translate(109.339 108.348)'
        fill='none'
        stroke={color ?? 'var(--color-secondary-200)'}
        stroke-linejoin='round'
        strokeWidth='3'
      />
      <line
        id='Line_203'
        data-name='Line 203'
        x2='22.279'
        y2='22.195'
        transform='translate(79.956 78.725)'
        fill='none'
        stroke={color ?? 'var(--color-secondary-200)'}
        strokeWidth='3'
      />
      <line
        id='Line_204'
        data-name='Line 204'
        x1='22.279'
        y2='22.195'
        transform='translate(79.956 78.725)'
        fill='none'
        stroke={color ?? 'var(--color-secondary-200)'}
        strokeWidth='3'
      />
      <path
        id='Path_4693'
        data-name='Path 4693'
        d='M91.1,64a25.823,25.823,0,1,0,18.277,7.556A25.822,25.822,0,0,0,91.1,64Z'
        fill='none'
        stroke={color ?? 'var(--color-secondary-200)'}
        stroke-linejoin='round'
        strokeWidth='3'
      />
    </g>
  </svg>
);
