"use client";


import { ThemeContextType, ReactChildrenType } from '@/utils/types';
import { createContext, useContext } from 'react';
import { usePrompt, useTheme, useToggle } from './index';

const ThemeContext = createContext<any>(undefined);

export const ThemeContextProvider = ({ children }: ReactChildrenType) => {

    const themeValues = useTheme();
    const promptValues = usePrompt();
    const { isToggled: loader, handleOpen, handleClose } = useToggle();
    const values = { ...promptValues, ...themeValues, loader, handleClose, handleOpen }

    return (
        <ThemeContext.Provider value={values}>
          {children}
        </ThemeContext.Provider>
    );

}

export const useThemeContext = () => {

    const context = useContext(ThemeContext);
    
    if (!context) {

        throw new Error('useThemeContext must be used within a ThemeContextProvider');

    }

    return context;

}
