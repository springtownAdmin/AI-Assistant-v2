"use client";

import { backdropAnimate } from '@/utils/motion';
import { BackdropProps } from '@/utils/types';
import { motion } from 'framer-motion'

const BackDrop = ({ children, onClick }: BackdropProps) => {

  const backdropClass = 'absolute top-0 left-0 h-full w-full flex justify-center items-center z-50';
  const bgBackdrop = { background: 'rgba(0, 0, 0, 0.8)' }
  
  return (
    <motion.div {...backdropAnimate} className={backdropClass} style={bgBackdrop} onClick={onClick}>
        {children}
    </motion.div>
  )

}

export default BackDrop