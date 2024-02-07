import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadingDotsAnimate, loadingContainerAnimate } from '@/utils/motion';
import { useThemeContext } from '@/hooks';

const LoadingDots = () => {

    const { isLight } = useThemeContext();
    const darkColor = "#929292"

    const bgColorOnlyDark = { backgroundColor: darkColor }
    const bgColorOnly = { backgroundColor: "#4285F4" }
    const DotsContainerClass = `w-full ${isLight && 'bg-gray-50'} p-4 flex`;
    const DotContainerStyle = { background: isLight ? '' : '#505050' }

    return (
        <div className={DotsContainerClass} style={DotContainerStyle}>
            <AnimatePresence>
            <motion.div {...loadingContainerAnimate} className='flex justify-center w-full h-4'>
                <motion.span {...loadingDotsAnimate} style={isLight ? bgColorOnly : bgColorOnlyDark} className='w-1 h-1 rounded-full mr-1'></motion.span>
                <motion.span {...loadingDotsAnimate} style={isLight ? bgColorOnly : bgColorOnlyDark} className='w-1 h-1 rounded-full mr-1'></motion.span>
                <motion.span {...loadingDotsAnimate} style={isLight ? bgColorOnly : bgColorOnlyDark} className='w-1 h-1 rounded-full mr-1'></motion.span>
            </motion.div>
            </AnimatePresence>
        </div> 
    )

}

export default LoadingDots