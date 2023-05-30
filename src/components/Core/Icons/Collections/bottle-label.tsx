export const BOTTLE_LABEL = ({ color, ...props }: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='54.662'
    height='81.578'
    viewBox='0 0 54.662 81.578'
    {...props}
  >
    <g id='Group_16868' data-name='Group 16868' transform='translate(-1070.251 -1304)'>
      <g id='Group_741' data-name='Group 741' transform='translate(1070.751 1304)'>
        <line
          id='Line_58'
          data-name='Line 58'
          y2='81.578'
          fill='none'
          stroke={color ?? 'var(--color-graphite-100)'}
          strokeWidth='1'
        />
        <line
          id='Line_59'
          data-name='Line 59'
          y1='81.578'
          transform='translate(53.662)'
          fill='none'
          stroke={color ?? 'var(--color-graphite-100)'}
          strokeWidth='1'
        />
        <g id='Group_740' data-name='Group 740' transform='translate(7.757 10.71)'>
          <rect
            id='Rectangle_1492'
            data-name='Rectangle 1492'
            width='38.173'
            height='60.182'
            fill='none'
            stroke={color ?? 'var(--color-graphite-100)'}
            strokeWidth='1'
          />
          <line
            id='Line_60'
            data-name='Line 60'
            x2='25.947'
            transform='translate(6.113 17.462)'
            fill='none'
            stroke={color ?? 'var(--color-graphite-100)'}
            strokeWidth='1'
          />
          <line
            id='Line_61'
            data-name='Line 61'
            x2='25.947'
            transform='translate(6.113 30.091)'
            fill='none'
            stroke={color ?? 'var(--color-graphite-100)'}
            strokeWidth='1'
          />
          <line
            id='Line_62'
            data-name='Line 62'
            x2='25.947'
            transform='translate(6.113 42.72)'
            fill='none'
            stroke={color ?? 'var(--color-graphite-100)'}
            strokeWidth='1'
          />
        </g>
      </g>
    </g>
  </svg>
);
