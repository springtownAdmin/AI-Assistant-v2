"use client";

import { IMAGES, SVGS } from '@/utils/constants';
import { usePrompt, useSelect, useThemeContext, useToggle } from '@/hooks';
import { WelcomeChat, UserQuery, PlaceholderContent, BotResponse, Container, Charts, LoadingDots } from '@/components';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, BarChartFill, Book, CardText, CircleHalf, EnvelopeFill, Robot } from 'react-bootstrap-icons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import StepSlider from './image-slider';

export const TryAsking = ({ questions = [], setPrompt }: any) => {

    const handleQuestion = (text = '') => {
        
        setPrompt(text);

    }

    return (
            <div className='mt-3 text-xs flex gap-sm md:gap-xs justify-center items-center flex-wrap w-full'>
                
                <div className='flex justify-center items-center'>
                    <Image src={SVGS.tryAsking} alt='try-asking-icon' height={13} width={13} />
                    <div className='pl-2'>
                        Try asking
                    </div>
                </div>

                {questions.length ? questions.map((value: any, index: number) => (
                    <div key={index} onClick={() => handleQuestion(value)} className='border p-1 rounded-full m-1 overflow-content cursor-pointer hover:bg-gray-100'>
                        {value}
                    </div>
                )) : <div className='ml-4'>...</div>}

            </div> 
    )
}

const AttachAndUpload = () => {

    return (
        <div className='flex text-sm'>

            <div className='flex mr-5 transition duration-300 hover:bg-gray-200 cursor-pointer rounded-full p-1 w-[80px] justify-center items-center'>
                <Image src={SVGS.focus} alt='focus' className='mr-2' width={12} height={12} />
                Focus
            </div>

            <div className={`flex transition duration-300 hover:bg-gray-200 cursor-pointer rounded-full p-1 w-[80px] justify-center items-center`}>
                <Image src={SVGS.attach} alt='attach' className='mr-2' width={12} height={12} />
                Attach
            </div>

        </div>
    )
}

const AskAnything = () => {

    return (
        <></>
        // <div className='w-[90%] md:w-[40%] border border-gray-200 rounded-md min-h-[100px] p-4'>

        //     <textarea value={text} onChange={handleChange} placeholder='Ask anything...' className='outline-none bg-transparent w-full resize-none'></textarea>
            
        //     <div className='flex justify-end items-center'>
                
        //         <div>
        //             <div onClick={handleClick} className={`p-2 transition duration-200 rounded-full ${text !== '' ? 'bg-blue-700 text-white cursor-pointer' : 'bg-gray-200'}`}>
        //                 <ArrowRight size={12} />
        //             </div>
        //         </div>

        //     </div>

        // </div>
    )
}

const Results = ({ reference = '', query = '', response = '', sampleQuestions = [], setPrompt }: any) => {


    const filterQuestion = sampleQuestions.filter((v: string) => v !== query);

    const handleQuestion = (newPrompt: string) => {
        setPrompt(newPrompt);
    }

    return (

        <>
        
            <div className='w-full'>

                <div className='text-3xl my-8'>{query}</div>

                {typeof reference !== 'string' && 
                    <>
                        <div className='flex gap-2 items-center my-3'>
                            {/* <Image src={SVGS.sources} alt='sources' height={20} width={20} /> */}
                            <Book size={20} />
                            <div className='text-lg'>
                                Sources
                            </div>
                        </div>

                        <div className='flex justify-start items-center gap-3 flex-wrap'>

                            {reference.map((x: any) => (
                                <div className='p-4 bg-[#f3f3ee] rounded-md'>
                                    {x}
                                </div>
                            ))}

                        </div>
                    </>
                }

                <div className='my-4'>

                    <div className='flex items-center'>
                        {/* <Image src={SVGS.answer} height={20} width={20} alt='answer' /> */}
                        <CircleHalf size={20} />
                        <div className='ml-3 text-lg'>Answer</div>
                    </div>

                    <div className='my-5'>
                        <p className='whitespace-pre-wrap'>{response}</p>
                    </div>

                </div>

            </div>

            <hr />

            <div>
                <div className='flex my-3'>
                    <Image src={SVGS.related} alt='sources' height={20} width={20} />
                    <div className='ml-2 text-lg'>
                        Related
                    </div>
                </div>

                <div>
                    {filterQuestion.map((v:any, i:any) => (

                        <div key={i} className='font-bold cursor-pointer hover:text-blue-500 py-2' onClick={() => handleQuestion(v)}>
                            {v}
                        </div>

                    ))}
                </div>
            </div>

            <hr />

        </>

    )


}

const AIAssistant = () => {

    const promptValues = usePrompt();
    const { prompt, screenRef, chats, showPrompt, handleQuery, textareaRef, setPrompt } = promptValues;
    const { userQuery, showLoader, storeAllChats, handleEnter, reference, response, handleRefresh } = promptValues;

    const { selectedOption, options, handleSelectChange, sampleQuestions, handleBucketRequest, selectedModel, necessaryDocs } = useSelect();
    const { isLight } = useThemeContext();

    const { isToggled: loader, handleOpen, handleClose } = useToggle();

    const [submit, setSubmit] = useState(true);

    const handleClick = () => {

        storeAllChats(selectedOption);

    }

    const handleIndustry = (e: any) => {

        handleSelectChange(e);
        handleBucketRequest(e);

    }

    const handleReload = () => {

        setSubmit(true);
        handleRefresh();
        
    }

    return (
        <Container>

                <div className='md:hidden p-6'>
                    <Image src={SVGS.fullLogo} alt='logo' height={200} width={200} />
                </div>

                <hr className='md:hidden' />

                {submit ? 
                    <div className='md:h-[95%] h-screen'>

                        <div className='flex justify-center items-center h-full w-full'>

                            <div className='w-full flex flex-col items-center'>
                                
                                <div><Image src={SVGS.logo} className='opacity-50' alt='logo' height={50} width={50} /></div>
                                <div className='text-3xl my-4'>Enterprise AI Assistant</div>
                    
                                    <div className='w-[90%] md:w-[40%] min-h-[100px] overflow-hidden'>

                                            <div className='flex overflow-hidden w-full'>

                                                <StepSlider 
                                                sampleQuestions={sampleQuestions}  
                                                options={options}
                                                handleBucketRequest={handleBucketRequest}
                                                selectedModel={selectedModel} 
                                                setPrompt={setPrompt} 
                                                handleSelectChange={handleSelectChange} 
                                                selectedOption={selectedOption} 
                                                textareaRef={textareaRef} 
                                                prompt={prompt} 
                                                handleQuery={handleQuery} 
                                                setSubmit={setSubmit} 
                                                handleOpen={handleOpen} 
                                                handleClose={handleClose} 
                                                storeAllChats={storeAllChats}
                                                necessaryDocs={necessaryDocs}
                                                />
                                                
                                            </div>


                                    </div>


                            </div>

                        </div>

                        <div className='text-gray-400 text-xs text-center flex justify-center'>Powered by SpringTownAI</div>

                    </div> 
                :
                    <div className='md:h-full h-screen w-full'>

                        <motion.div className='w-full md:flex text-black p-8 md:p-12 bg-[#fcfcf9]'>

                            <div className='w-full relative overflow-auto'>

                                <div className='flex items-center justify-between mb-4'>

                                    <div className='cursor-pointer' onClick={handleReload}>
                                        <ArrowLeft />
                                    </div>

                                    <div className='flex gap-4'>

                                        {/* <div>{necessaryDocs.map((v) => v)}</div> */}

                                        <div>
                                            <select className='border border-[lightgray] rounded-md p-3 w-full outline-none' value={selectedOption} onChange={handleIndustry}>
                                                {options.map((value, index) => (
                                                    <option>{value}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                </div>

                                <hr />  

                                {loader 
                            ? 
                                <PlaceholderContent content='chat' /> 
                            : 
                                <>
                                    <div className='w-full mb-40'>


                                        {!!chats.length && chats.map((v, i) => {

                                            return (
                                                
                                                <Results sampleQuestions={sampleQuestions} setPrompt={setPrompt} reference={v.reference} query={v.user} response={v.bot} />
                                                
                                            )

                                        })}

                                        {showPrompt ? 
                                        <>
                                            {showLoader ? <PlaceholderContent /> : <Results setPrompt={setPrompt} sampleQuestions={sampleQuestions} reference={reference} query={userQuery} response={response} />}
                                        </> : <WelcomeChat />}



                                        <div className='fixed left-[2%] md:left-auto bottom-12 w-[95%] md:w-[70%]'>
                                            <div className='rounded-full p-2 bg-[#f3f3ee]'>
                                                <div className='flex items-center p-3 bg-white rounded-full border border-[lightgray]'>
                                                    {/* <Image src={SVGS.attach} alt='attach' className='mr-3' height={18} width={18} /> */}
                                                    <textarea ref={textareaRef} value={prompt} onKeyDown={(e) => handleEnter(e, selectedOption)} onChange={handleQuery} rows={1} className='h-[20px] w-full resize-none outline-none' placeholder='Ask follow-up...' ></textarea>
                                                    
                                                    <div onClick={handleClick}>
                                                        <div className={`p-2 transition duration-200 rounded-full ${prompt !== '' ? 'bg-blue-700 text-white cursor-pointer' : 'bg-gray-200'}`}>
                                                            <ArrowRight size={13} className='rotate-[270deg]' />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                {/* <div className='w-full md:w-[30%] p-4'>
                                    <div className='py-2'>
                                        <Image alt='space' className='rounded-lg w-full' src={IMAGES.starlab01} />
                                    </div>
                                    <div>
                                        <Image alt='space' className='rounded-lg w-full' src={IMAGES.starlab02} />
                                    </div>
                                </div> */}
                                </>
                        }

                            </div>

                        </motion.div>
                    
                       

                    </div>
                }

        </Container>
    )


    return (

        <div className='md:h-screen md:flex w-full'>
           
            <div className='hidden md:block md:w-[70px] py-8 px-3'>

                <div className='flex justify-center items-center mb-8'>
                    <Image src={SVGS.logo} alt='logo' height={30} width={30} className='' />
                </div>

                <div className='flex flex-col gap-8 justify-between'>
                    <div className='flex justify-center gap-4 p-1 cursor-pointer hover:bg-[#d7d7d7] rounded-lg transition-all duration-200 text-[#808080]'><Robot size={25} /></div>
                    <div className='flex justify-center gap-4 p-1 cursor-pointer hover:bg-[#d7d7d7] rounded-lg transition-all duration-200 text-[#808080]'><BarChartFill size={25} /></div>
                    <div className='flex justify-center gap-4 p-1 cursor-pointer hover:bg-[#d7d7d7] rounded-lg transition-all duration-200 text-[#808080]'><CardText size={25} /> </div>
                    <div className='flex justify-center gap-4 p-1 cursor-pointer hover:bg-[#d7d7d7] rounded-lg transition-all duration-200 text-[#808080]'><EnvelopeFill size={25} /> </div>
                </div>

            </div>

            <div className={`w-full ${submit ? 'h-fit' : 'h-full'} md:h-full md:w-[95%] bg-[#fcfcf9] md:m-2 rounded-lg text-gray-400`}>

                <div className='md:hidden p-6'>
                    <Image src={SVGS.fullLogo} alt='logo' height={200} width={200} />
                </div>

                <hr className='md:hidden' />

                {submit ? <div className='md:h-[95%] h-screen'>

                    <div className='flex justify-center items-center h-full w-full'>

                        <div className='w-full flex flex-col items-center'>
                            
                            <div><Image src={SVGS.logo} className='opacity-50' alt='logo' height={50} width={50} /></div>
                            <div className='text-3xl my-4'>Enterprise AI Assistant</div>
                 
                                <div className='w-[90%] md:w-[40%] min-h-[100px] overflow-hidden'>

                                        <div className='flex overflow-hidden w-full'>

                                            <StepSlider selectedModel={selectedModel} setPrompt={setPrompt} handleSelectChange={handleSelectChange} selectedOption={selectedOption} textareaRef={textareaRef} sampleQuestions={sampleQuestions} prompt={prompt} handleQuery={handleQuery} setSubmit={setSubmit} handleOpen={handleOpen} handleClose={handleClose} storeAllChats={storeAllChats} />
                                            
                                            {/* <motion.div  transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }} className='w-full overflow-hidden'>
                                                <select className='border border-[lightgray] rounded-full p-3 w-full outline-none'>
                                                    <option>Select a model</option>
                                                    <option>Cohere</option>
                                                    <option>Open AI</option>
                                                    <option>Llama</option>
                                                </select>
                                            </motion.div>


                                            <motion.div initial={{ translateX: 0 }}  transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }} className='w-full overflow-hidden'>
                                                <select className='border border-[lightgray] rounded-full p-3 w-full outline-none'>
                                                    <option>Select a model</option>
                                                    <option>Cohere</option>
                                                    <option>Open AI</option>
                                                    <option>Llama</option>
                                                </select>
                                            </motion.div> */}
                                        </div>



                                </div>

                            {/* <div className='w-[90%] md:w-[40%] min-h-[100px]'>
                                <select className='border border-[lightgray] rounded-full p-3 w-full outline-none'>
                                    <option>Select a bucket</option>
                                    <option>Bedrock</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                </select>
                            </div> */}

                        </div>

                    </div>

                    <div className='text-gray-400 text-xs text-center flex justify-center'>Powered by SpringTownAI</div>

                </div> :
                
                
                    <div className='md:h-full h-screen w-full'>

                        <motion.div className='w-full md:flex text-black p-8 md:p-12 bg-[#fcfcf9]'>

                            <div className='w-full relative overflow-auto'>

                                <div className='flex items-center justify-between mb-4'>

                                    <div className='cursor-pointer' onClick={handleReload}>
                                        <ArrowLeft />
                                    </div>

                                    <div className='flex gap-4'>
                                        {/* <div>
                                            <select className='border border-[lightgray] rounded-md p-3 w-full outline-none' value={selectedModel} onChange={handleModel}>
                                                {optionsModel.map((value, index) => (
                                                    <option>{value}</option>
                                                ))}
                                            </select>
                                        </div> */}

                                        <div>
                                            <select className='border border-[lightgray] rounded-md p-3 w-full outline-none' value={selectedOption} onChange={handleIndustry}>
                                                {options.map((value, index) => (
                                                    <option>{value}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                </div>

                                <hr />

                                {loader 
                            ? 
                                <PlaceholderContent content='chat' /> 
                            : 
                                <>
                                    <div className='w-full mb-40'>


                                        {!!chats.length && chats.map((v, i) => {

                                            return (
                                                
                                                <Results reference={v.reference} query={v.user} response={v.bot} />
                                                
                                            )

                                        })}

                                        {showPrompt ? 
                                        <>
                                            {showLoader ? <PlaceholderContent /> : <Results reference={reference} query={userQuery} response={response} />}
                                        </> : <WelcomeChat />}



                                        <div className='fixed left-[2%] md:left-auto bottom-12 w-[95%] md:w-[70%]'>
                                            <div className='rounded-full p-2 bg-[#f3f3ee]'>
                                                <div className='flex items-center p-3 bg-white rounded-full border border-[lightgray]'>
                                                    {/* <Image src={SVGS.attach} alt='attach' className='mr-3' height={18} width={18} /> */}
                                                    <textarea ref={textareaRef} value={prompt} onKeyDown={(e) => handleEnter(e, selectedOption)} onChange={handleQuery} rows={1} className='h-[20px] w-full resize-none outline-none' placeholder='Ask follow-up...' ></textarea>
                                                    
                                                    <div onClick={handleClick}>
                                                        <div className={`p-2 transition duration-200 rounded-full ${prompt !== '' ? 'bg-blue-700 text-white cursor-pointer' : 'bg-gray-200'}`}>
                                                            <ArrowRight size={13} className='rotate-[270deg]' />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                {/* <div className='w-full md:w-[30%] p-4'>
                                    <div className='py-2'>
                                        <Image alt='space' className='rounded-lg w-full' src={IMAGES.starlab01} />
                                    </div>
                                    <div>
                                        <Image alt='space' className='rounded-lg w-full' src={IMAGES.starlab02} />
                                    </div>
                                </div> */}
                                </>
                        }

                            </div>

                        </motion.div>
                    
                       

                    </div>
                }


            </div>
        </div>
    )

}

export default AIAssistant