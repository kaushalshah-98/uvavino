import { ICON_TYPE } from '~/components';
import { SubMenus } from '../config/enums';

export type IMenu = {
  label: SubMenus;
  href: string;
  icon?: ICON_TYPE | null;
  width?: number;
  height?: number;
};
