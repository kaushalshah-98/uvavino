import { Text } from '../../Display';
import { Icon } from '../../Icons';
import { CustomMenu, CustomMenuItem } from '../CustomMenu/CustomMenu';

type Props = {
  onChange: (item: CustomMenuItem) => void;
  options: CustomMenuItem[];
  activeId?: number;
};

export const FilterMenu = ({ options, onChange, activeId }: Props) => {
  return (
    <CustomMenu
      activeId={activeId}
      menuWrapperClass='shadow-dropdown py-3 px-2 mt-2 min-w-[220px] rounded-sm right-0'
      onItemClick={onChange}
      options={options}
    >
      <Text className='text-primary-300 text-base'>Order by:</Text>
      <Text className='text-primary-300 opacity-50 ml-2 text-base'>
        {activeId ? options.find((o) => o.id === activeId)?.label?.name ?? '' : ''}
      </Text>
      <Icon name='CHEVRON_DOWN' className='mt-2.5 ml-2' />
    </CustomMenu>
  );
};
