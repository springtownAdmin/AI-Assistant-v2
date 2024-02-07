"use client";

import { LoaderContextType, ReactChildrenType } from '@/utils/types';
import { createContext, useContext } from 'react';
import { useToggle } from './index';
import { loaderAnimate } from '@/utils/motion';
import { motion } from 'framer-motion';
import { BackDrop } from '@/components';

const LoaderContext = createContext<LoaderContextType>(undefined);

export const LoaderContextProvider = ({ children }: ReactChildrenType) => {
 
    const { isToggled: loader, handleClose: hideLoader, handleOpen: showLoader } = useToggle();
    const loaderValues = { loader, hideLoader, showLoader };

    return (
        <LoaderContext.Provider value={loaderValues}>
            {loader ? <BackDrop><motion.div {...loaderAnimate} className='loader'></motion.div></BackDrop>: children}
        </LoaderContext.Provider>
    );

}

export function useLoaderContext() {

    const context = useContext(LoaderContext);
    
    if (!context) {

        throw new Error('useLoaderContext must be used within a LoaderContextProvider');

    }

    return context;

}