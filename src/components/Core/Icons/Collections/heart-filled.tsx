export const HEART_FILLEd = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='26.275'
    height='24'
    viewBox='0 0 26.275 24'
    {...props}
  >
    <path
      id='Path_4660'
      data-name='Path 4660'
      d='M2875.379-1579.858l-.812-.855c-.3-.319-7.439-7.837-9.756-10.554-1.873-2.192-2.708-4.176-2.551-6.065a7.124,7.124,0,0,1,2.073-4.444,7.126,7.126,0,0,1,4.451-2.058,7.082,7.082,0,0,1,5.424,1.871,7.128,7.128,0,0,1,1.171,1.4,7.128,7.128,0,0,1,1.171-1.4,7.08,7.08,0,0,1,5.422-1.871,7.125,7.125,0,0,1,4.453,2.058,7.119,7.119,0,0,1,2.073,4.444c.157,1.88-.7,3.922-2.554,6.07-2.313,2.712-9.45,10.231-9.752,10.55Z'
      transform='translate(-2862.241 1603.858)'
      fill={color ?? 'var(--color-primary-300)'}
    />
  </svg>
);