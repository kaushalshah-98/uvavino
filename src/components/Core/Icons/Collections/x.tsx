export const X = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14.707'
    height='14.707'
    viewBox='0 0 14.707 14.707'
    {...props}
  >
    <g id='Group_845' data-name='Group 845' transform='translate(-842.379 -641.742)'>
      <line
        id='Line_16'
        data-name='Line 16'
        x1='14'
        y2='14'
        transform='translate(842.732 642.095)'
        fill='none'
        stroke={color ?? 'var(--color-primary-500)'}
        strokeWidth='1'
      />
      <line
        id='Line_17'
        data-name='Line 17'
        x1='14'
        y1='14'
        transform='translate(842.732 642.095)'
        fill='none'
        stroke={color ?? 'var(--color-primary-500)'}
        strokeWidth='1'
      />
    </g>
  </svg>
);
