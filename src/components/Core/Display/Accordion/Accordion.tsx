import { AnimatePresence, motion } from 'framer-motion';
import { cx } from '~/libs';
import { Text } from '../Text/Text';
import { BiMinus, BiPlus } from 'react-icons/bi';

interface AccordionProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Accordion = (props: AccordionProps) => {
  const { open = false, onClick, title, children, className = '' } = props;

  return (
    <div className={cx('flex flex-col py-3 px-1 space-y-3', className)}>
      <div onClick={onClick} className='flex justify-between items-center cursor-pointer'>
        <Text className='tracking-[0.8px] font-bold'>{title}</Text>

        {open ? (
          <BiMinus className='text-primary-200 duration-100 h-5 w-5' />
        ) : (
          <BiPlus className='text-primary-200 duration-100 h-5 w-5' />
        )}
      </div>

      {/* <section
        className={cx(`overflow-hidden transition-all duration-500 ease-in-out`, {
          'max-h-40': open,
          'max-h-0': !open,
        })}
      >
        {children}
      </section> */}

      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            key='content'
            animate='open'
            exit='collapsed'
            initial='collapsed'
            className={cx(
              'max-h-40 overflow-y-auto pr-6',
              'scrollbar-thin scrollbar-thumb-primary-200 scrollbar-thumb-rounded-sm'
            )}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            // variants={{
            //   open: { opacity: 1, height: 'auto' },
            //   collapsed: { opacity: 0, height: 0 },
            // }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
