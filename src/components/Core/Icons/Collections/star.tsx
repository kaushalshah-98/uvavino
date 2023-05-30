export const STAR = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='30.75'
    height='29.285'
    viewBox='0 0 30.75 29.285'
    {...props}
  >
    <path
      id='Path_10438'
      data-name='Path 10438'
      d='M83.9,75.3l4.634,9.394L98.9,85.06l-7.494,8.455,2.334,10.32L83.9,98.961l-9.84,4.874,2.334-10.32L68.9,85.06l10.366-.366Z'
      transform='translate(-68.525 -74.925)'
      fill={color ?? 'var(--color-secondary-200)'}
      stroke={color ?? 'var(--color-secondary-200)'}
      stroke-linecap='round'
      stroke-linejoin='round'
      strokeWidth='0.75'
    />
  </svg>
);
