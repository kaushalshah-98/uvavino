export const LOGO_SMALL = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='400'
    height='400'
    viewBox='0 0 400 400'
    {...props}
  >
    <defs>
      <clipPath id='clip-UVAVino_Favicon'>
        <rect width='400' height='400' />
      </clipPath>
    </defs>
    <g id='UVAVino_Favicon' clip-path='url(#clip-UVAVino_Favicon)'>
      <path
        id='Path_10415'
        data-name='Path 10415'
        d='M32.454,214.872c0,41.8,23.647,84.454,111.9,84.454v-2.534c-28.714-3.378-40.116-40.115-40.116-80.653V32.029c0-11.4,6.334-21.536,31.67-21.536V7.96H.784v2.534c25.336,0,31.67,10.134,31.67,21.536ZM254.145,63.277c0-26.6,14.357-52.784,42.227-52.784V7.96h-92.9v2.534c27.87,0,42.227,25.758,42.227,52.784V216.138c0,40.538-25.758,79.386-80.231,80.653v2.534c63.763,0,88.676-42.649,88.676-84.454Z'
        transform='translate(51.216 46.039)'
        fill={color ?? 'var(--color-primary-300'}
      />
    </g>
  </svg>
);
