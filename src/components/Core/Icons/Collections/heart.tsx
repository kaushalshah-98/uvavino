export const HEART = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='18.086'
    viewBox='0 0 20 18.086'
    {...props}
  >
    <path
      id='Path_2497'
      data-name='Path 2497'
      d='M1494.182-686.418l-.424-.447c-.237-.249-5.823-6.134-7.633-8.257-1.415-1.655-2.046-3.14-1.929-4.538a5.285,5.285,0,0,1,1.54-3.3,5.286,5.286,0,0,1,3.3-1.528,5.257,5.257,0,0,1,4.027,1.389,5.29,5.29,0,0,1,1.116,1.473,5.288,5.288,0,0,1,1.117-1.473,5.258,5.258,0,0,1,4.026-1.389,5.288,5.288,0,0,1,3.3,1.528,5.284,5.284,0,0,1,1.539,3.3c.116,1.391-.534,2.919-1.931,4.54-1.808,2.12-7.394,8.005-7.631,8.254Zm-4.71-16.915q-.169,0-.341.013a4.149,4.149,0,0,0-3.77,3.758,5.369,5.369,0,0,0,1.653,3.681c1.5,1.764,5.8,6.316,7.167,7.763,1.369-1.447,5.663-6,7.167-7.763a5.324,5.324,0,0,0,1.654-3.681,4.15,4.15,0,0,0-3.771-3.758,4.1,4.1,0,0,0-3.139,1.082,4.138,4.138,0,0,0-1.325,3.029h-1.17a4.137,4.137,0,0,0-1.326-3.029A4.089,4.089,0,0,0,1489.472-703.334Z'
      transform='translate(-1484.182 704.504)'
      fill={color ?? 'var(--color-graphite-100)'}
    />
  </svg>
);