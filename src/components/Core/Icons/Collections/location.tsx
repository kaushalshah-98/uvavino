export const LOCATION = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='13.012'
    height='17.621'
    viewBox='0 0 13.012 17.621'
    {...props}
  >
    <path
      id='Path_11391'
      data-name='Path 11391'
      d='M6,0A6,6,0,0,0,.907,9.173L6,16.621l5.093-7.449A6,6,0,0,0,6,0ZM6,8.207A2.207,2.207,0,1,1,7.56,7.561,2.207,2.207,0,0,1,6,8.207'
      transform='translate(0.507 0.5)'
      fill='none'
      stroke={color ?? 'var(--color-graphite-400)'}
      stroke-linejoin='round'
      strokeWidth='1'
    />
  </svg>
);
