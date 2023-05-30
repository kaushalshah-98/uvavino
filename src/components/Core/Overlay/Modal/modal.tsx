import { motion, AnimatePresence } from 'framer-motion';
import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import { MODAL_CONTAINER_ID } from '~/config';
import { cx } from '~/libs';

export type ModalProps = React.PropsWithChildren<{
  className?: string;
  containerClass?: string;
  onClick?: () => void;
  onClose: () => void;
  open: boolean;
  overlayClass?: string;
  renderToElement?: Element;
}>;

const ModalComponent = (props: ModalProps) => {
  const { open, onClose, children, className, containerClass, overlayClass } = props;

  if (!open) {
    return null;
  }

  const JSX = (
    <AnimatePresence>
      {open && (
        <div
          className={cx('fixed inset-0 z-50 flex items-center justify-center p-4', containerClass)}
        >
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className={'fixed inset-0 transition-opacity'} onClick={onClose}>
              <div className={cx('absolute inset-0 bg-primary-400 opacity-30', overlayClass)} />
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, translateY: -10 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              style={{ scrollbarWidth: 'thin' }}
              className={cx(
                'max-h-[90vh] overflow-y-auto rounded bg-chalk-50 shadow-md',
                className
              )}
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(JSX, document.getElementById(MODAL_CONTAINER_ID) as Element);
};
export const Modal = memo(ModalComponent) as typeof ModalComponent;
