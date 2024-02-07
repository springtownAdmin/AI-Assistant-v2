"use client";

import { BackdropContextType, ReactChildrenType } from '@/utils/types';
import { createContext, useContext } from 'react';
import { useToggle } from './index';

const BackDropContext = createContext<BackdropContextType>(undefined);

export function BackDropContextProvider({ children }: ReactChildrenType) {

  const backdropValues = useToggle();

  return (
    <BackDropContext.Provider value={backdropValues}>
      {children}
    </BackDropContext.Provider>
  );

}

export function useBackdropContext() {

    const context = useContext(BackDropContext);
    
    if (!context) {

        throw new Error('useBackdropContext must be used within a BackDropContextProvider');

    }

    return context;

}
