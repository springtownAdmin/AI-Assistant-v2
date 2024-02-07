"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { BackDrop } from './index';
import { popUpAnimate } from '@/utils/motion';
import { modalResponsive } from '@/styles';
import { ModalProps } from '@/utils/types';

const Modal = ({ handleClose, isOpen, children }: ModalProps) => {

  return (
    <AnimatePresence initial={false} mode='wait'>
        {isOpen && <BackDrop onClick={handleClose}>
            <motion.div {...popUpAnimate} onClick={(e) => e.stopPropagation()} style={modalResponsive} className='m-auto p-3 sm:p-5 rounded-xl flex flex-col items-center border-none bg-white'>
                {children}
            </motion.div>
        </BackDrop>}
    </AnimatePresence>
  )

}

export default Modal