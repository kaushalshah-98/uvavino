export const FACEBOOK = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='10.993'
    height='21.051'
    viewBox='0 0 10.993 21.051'
    {...props}
  >
    <path
      id='Path_38'
      data-name='Path 38'
      d='M87.134,21.051v-9.59h3.275l.468-3.742H87.134V5.38c0-1.053.351-1.871,1.871-1.871h1.988V.117C90.525.117,89.356,0,88.069,0a4.514,4.514,0,0,0-4.795,4.912V7.719H80v3.742h3.275v9.59Z'
      transform='translate(-80)'
      fill={color ?? '#fff'}
      fillRule='evenodd'
    />
  </svg>
);
