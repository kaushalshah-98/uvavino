import { ICON_COMPONENTS, ICON_TYPE } from './name';

interface IconProps extends React.ComponentPropsWithRef<'svg'> {
  color?: string;
  name: ICON_TYPE;
}
export const Icon = (props: IconProps) => {
  const IconComponent = ICON_COMPONENTS[props.name];
  return <IconComponent {...props} />;
};
