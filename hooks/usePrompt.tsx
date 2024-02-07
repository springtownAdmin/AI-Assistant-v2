"use client";

import { API } from '@/utils/axios-instance';
import { ChatType, TextAreaRefType, handleEnterType, handleQueryType } from '@/utils/types';
import axios from 'axios';
import React from 'react'

const usePrompt = () => {
  
    const [ prompt, setPrompt ] = React.useState('');
    const [ response, setResponse ] = React.useState('');
    const [ reference, setReference ] = React.useState([]);
    const [ userQuery, setUserQuery ] = React.useState('');
    const [ chats, setChats ] = React.useState<ChatType>([]);
    const textareaRef = React.useRef<TextAreaRefType>(null);
    const screenRef: React.RefObject<HTMLDivElement> = React.useRef(null);

    const [ showPrompt, setShowPrompt ] = React.useState(false);
    const [ showLoader, setShowLoader ] = React.useState(false);

    React.useEffect(() => {

        // Scroll to the bottom of the chat when messages change

        if (screenRef?.current) {
            screenRef.current.scrollTo(0, screenRef.current.scrollHeight);
        }


    }, [chats]);

    const handleQuery: handleQueryType = (e) => {

        if(!textareaRef.current) return;

        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    
        setPrompt(e.target.value);
    
    }

    const storeAllChats = async (industry: string) => {

        if (prompt.trim() !== '') {

            if (userQuery !== '' && response !== '') {
                
                const newChats = [
                    ...chats,
                    {
                        user: userQuery,
                        bot: response,
                        reference: reference
                    }
                ]

                setChats(newChats);
                setShowPrompt(false);

            }

            const reqBody = { query: prompt, industry_name: industry }
            setUserQuery(prompt);
            setShowPrompt(true);
            setShowLoader(true);
            setPrompt('');

            const res = await API.post('/query_txt', reqBody);
            const data = res.data;
            console.log(data);

            setResponse(data.response);
            setReference(data.source);
            setShowLoader(false);

        }

    }

    const handleEnter = (e: handleEnterType, industry: string) => {

        //  ======================================================================> 
        // 👇 Functionality to move to the next line by pressing 'shift + enter' keys together
        //  ======================================================================> 
        
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
            storeAllChats(industry);
    
        }
    
    }

    const handleRefresh = () => {

        setChats([]);
        setReference([]);
        setResponse('');
        setUserQuery('');
        setPrompt('');

    }

    return { prompt, chats, screenRef, response, setPrompt, reference, showPrompt, userQuery, handleRefresh, handleQuery, showLoader, textareaRef, storeAllChats, handleEnter }

}

export default usePrompt