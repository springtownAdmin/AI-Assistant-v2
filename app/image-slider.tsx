"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'react-bootstrap-icons';
import { useSelect } from '@/hooks';
import { WelcomeChat } from '@/components';
import { API } from '@/utils/axios-instance';
import { TryAsking } from './page';
import { toast } from 'react-toastify';

const StepSlider = ({ setSubmit, handleOpen, necessaryDocs, sampleQuestions, options, handleBucketRequest, handleClose, selectedOption, handleSelectChange, storeAllChats, handleQuery, prompt, textareaRef, setPrompt }: any) => {

  const [currentStep, setCurrentStep] = useState(2); // Start from step 1
  const { handleModelRequest, handleSelectModel } = useSelect();

  
  const handleKeyDown = async (e: any) => {
    

    if (e.key === 'Enter' && e.shiftKey) {
    
        // Move to the next line
        const cursorPosition = e.currentTarget.selectionStart;
        const text = e.currentTarget.value;
        const textBeforeCursor = text.slice(0, cursorPosition);
        const textAfterCursor = text.slice(cursorPosition);
    
        const newText = textBeforeCursor + textAfterCursor;
    
        e.currentTarget.value = newText;
    
        // Set the cursor position to the end of the inserted newline
        e.currentTarget.setSelectionRange(cursorPosition + 1, cursorPosition);
      
    } else if (e.key === 'Enter') {
        
        e.preventDefault();
    
        setSubmit(false);
        handleOpen()

        await storeAllChats(selectedOption);

        handleClose();

    
    }

  }

  const handleSelectChangeStep1 = (e: any) => {
    // Process the selected value from step 1 if needed
    
    handleSelectModel(e);
    handleModelRequest(e);
    
    setCurrentStep(2); // Move to step 2
    
  };

  const handleSelectChangeStep2 = (e:any) => {
    // Process the selected value from step 2 if needed
    handleSelectChange(e);
    handleBucketRequest(e);

    setCurrentStep(3);
    // Here you could set up a completion state or move to a new view
  };

  const handleClick = async () => {

    
    if (prompt !== '') {

        setSubmit(false);
        handleOpen()

        await storeAllChats(selectedOption);

        handleClose();

    }

  }

  return (
    <div className='w-full'>

        {currentStep === 2 && (
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
            >
                <select id='select-field-for-industry' disabled={options.length === 0} className='border border-[lightgray] rounded-full p-3 w-full outline-none' value={selectedOption} onChange={handleSelectChangeStep2}>
                    <option value="">Select a Industry</option>
                    {options.map((data:any, index:any) => (
                        <option key={index} value={data}>{data}</option>
                    ))}
                </select>
            </motion.div>
        )}

        {currentStep === 3 && (
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
            >

                <div className='w-full border border-gray-200 rounded-md min-h-[100px] p-4 bg-white'>

                    <textarea ref={textareaRef} onKeyDown={handleKeyDown} value={prompt} onChange={handleQuery} placeholder='Ask anything...' className='outline-none bg-transparent w-full resize-none'></textarea>

                    <div className='flex justify-end items-center'>
                        
                        <div onClick={handleClick}>
                            <div className={`p-2 transition duration-200 rounded-full ${prompt !== '' ? 'bg-blue-700 text-white cursor-pointer' : 'bg-gray-200'}`}>
                                <ArrowRight size={12} />
                            </div>
                        </div>

                    </div>

                </div>

                <TryAsking questions={sampleQuestions} setPrompt={setPrompt} />

                {/* {necessaryDocs.map((val: any) => (
                    <div className='border bg-gray-100 rounded-md p-1 text-xs my-1'>
                        {val}
                    </div>
                ))} */}

            </motion.div>
        )}
      
    </div>
  );
};

export default StepSlider;
