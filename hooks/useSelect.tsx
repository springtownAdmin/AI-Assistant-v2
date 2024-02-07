"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useThemeContext, useToggle } from './index';
import { toast } from 'react-toastify';
import { API } from '@/utils/axios-instance';


const useSelect = () => {

    const [ options, setOptions ] = useState([]);
    const [ optionsModel, setOptionsModels ] = useState([]);
    const [ selectedOption, setSelectedOption ] = useState('');
    const [ selectedModel, setSelectedModel ] = useState('');
    const [ necessaryDocs, setNeccessaryDocs ] = useState([]);
    const { isToggled, handleClose, handleOpen } = useToggle();
    const [ sampleQuestions, setSampleQuestions ] = useState([]);
    const { theme } = useThemeContext();

    useEffect(() => {

        const getAllOptions = async () => {

            const res = await API.get('/get_industry_names');
            // const modelsRes = await API.get('/get_models');

            setOptions(res.data.industry_names);
            // setOptionsModels(modelsRes.data.model_names);

        }

        getAllOptions();

    }, []);

    const handleBucketRequest = async (e: React.ChangeEvent<HTMLSelectElement>) => {

        handleOpen();

        const res = await API.post('/get_docs', { industry_name: e.target.value });
        const total_docs = res.data.total_docs;

        // res.status === 200 ? toast.success(`${total_docs} documents are fetched successfully`, { theme: theme }) : 
        // toast.error('Something went wrong 😥', { theme: theme });

        toast.success(<div>{res.data.file_types.All.map(v => <div>{v}</div>)}</div>, { closeOnClick: true, autoClose: false })
        // for(let i = 0; i < res.data.file_types.All.length; i++)
            // toast.success(res.data.file_types.All[i], { closeOnClick: true, autoClose: false })
        // console.log(res.data.file_types.All)

        setSampleQuestions(res.data.questions);
        setNeccessaryDocs(res.data.file_types.All);

        console.log(res);

        handleClose();

    }

    const handleModelRequest = async (e: React.ChangeEvent<HTMLSelectElement>) => {

        const res = await API.post('/select_model', { model_name: e.target.value });

        res.status === 200 ? toast.success('Model fetched successfully 👍', { theme: theme }) : 
        toast.error('Something went wrong 😥', { theme: theme });

        console.log(res);

    }


    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption(e.target.value);

    const handleSelectModel = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedModel(e.target.value);


    return { options, optionsModel, necessaryDocs, sampleQuestions, selectedOption, selectedModel, handleSelectChange, handleSelectModel, handleModelRequest, setOptions, isToggled, handleBucketRequest };

}

export default useSelect