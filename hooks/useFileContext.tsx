"use client";

import { createContext, useContext } from 'react';
import { useUpload } from './index';
import { FileContextType, ReactChildrenType } from '@/utils/types';

const FileContext = createContext<FileContextType>(undefined);

export function FileContextProvider({ children }: ReactChildrenType) {

    const fileValues = useUpload();
  
    return (
      <FileContext.Provider value={fileValues}>
        {children}
      </FileContext.Provider>
    );
  
}

export function useFileContext() {

    const context = useContext(FileContext);
    
    if (!context) {

        throw new Error('useFileContext must be used within a FileContextProvider');

    }

    return context;

}