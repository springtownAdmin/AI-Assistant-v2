// "use client";

// import { SVGS } from '@/utils/constants';
// import { usePrompt, useSelect, useThemeContext } from '@/hooks';
// import { WelcomeChat, UserQuery, PlaceholderContent, BotResponse, Container, Charts } from '@/components';
// import Image from 'next/image';

// const AIAssistant = () => {

//     const promptValues = usePrompt();
//     const { prompt, screenRef, chats, showPrompt, handleQuery, textareaRef } = promptValues;
//     const { userQuery, showLoader, storeAllChats, handleEnter, reference, response } = promptValues;

//     const { selectedOption, options, handleSelectChange, isToggled, handleBucketRequest } = useSelect();
//     const { isLight } = useThemeContext();

//     const ChatContainerStyle = { boxShadow: isLight ? 'none' : '0px 0px 1px lightgray' }
//     const chatContainerClass = `${isLight ? 'border border-gray-200 bg-white' : 'bg-[#464646]'} rounded-md w-[95%] md:w-2/4 mr-5`;

//     const promptClass = `${isLight && 'border border-gray-300'} rounded-3xl p-3 flex`;
//     const promptStyle = { boxShadow: isLight ? 'none' : '0px 0px 5px lightgray' };

//     const sendBtnStyle = { filter: isLight ? 'none' : 'grayscale(1)' }

//     const selectContainerClass = `${isLight ? 'border border-gray-200 bg-white' : 'bg-[#464646]'} rounded-md h-auto p-3 mb-4 md:mb-0 md:mr-5`;
//     const selectContainerStyle = { boxShadow: isLight ? 'none' : '0px 0px 1px lightgray' }

//     const selectLabelClass = `text-[${isLight ? 'black' : 'lightgray'}]`;

//     const selectClass = `w-full ${isLight ? 'border border-gray-300' : 'bg-[#464646] text-[lightgray]'} outline-none rounded-md p-3`;
//     const selectStyle = { boxShadow: isLight ? 'none' : '0px 0px 3px lightgray' }

//     const fetchBtnClass = `${isLight ? `bg-blue-500 ${selectedOption !== '' ? 'hover:bg-blue-800' : 'cursor-not-allowed'}` : `bg-[#464646] border border-[lightgray] ${selectedOption !== '' ? 'hover:bg-[lightgray] hover:text-[#464646]' : 'cursor-not-allowed'}`} text-white w-full p-3 rounded-md transition duration-500 ${selectedOption !== '' ? 'cursor-pointer' : 'opacity-50'} flex justify-center items-center`;
//     const chartsClass = `${isLight ? 'border border-gray-200 bg-white' : 'bg-[#464646]'} rounded-md h-full p-3 md:mr-5 overflow-auto`;

//     const textAreaClass = `hide-scroll max-h-[35px] text-[${isLight ? 'black' : 'lightgray'}] bg-transparent w-4/5 h-auto focus:outline-none border-none resize-none`

//     return (
//         <Container>

//             <div className={chatContainerClass} style={ChatContainerStyle}>
            
//                 <div ref={screenRef} className='h-[500px] overflow-y-auto hide-scroll md:h-[90%] scroll-smooth'>

                    
//                     {!!chats.length && chats.map((v, i) => {

//                         return (

//                             <section key={i} >

//                                 <UserQuery query={v.user} />
//                                 <BotResponse response={v.bot} reference={v.reference} />
                            
//                             </section>
//                         )

//                     }) }

//                     {showPrompt ? <section>
//                         <UserQuery query={userQuery} />
//                         {showLoader ? <PlaceholderContent /> : <BotResponse reference={reference} response={response} />}
//                     </section> : <WelcomeChat />}

//                 </div>

//                 <div className='w-full px-3 pb-3'>

//                     <div className={promptClass} style={promptStyle}>

//                         <textarea ref={textareaRef} rows={1} value={prompt} onKeyDown={handleEnter} onChange={handleQuery} className={textAreaClass} placeholder='Type your prompt here...'>
//                         </textarea>

//                         <div className='w-1/5 flex justify-end items-center'>
//                             {/* <div className='mr-3 cursor-pointer'>
//                                 <Image src={SVGS.attachment} alt='attachment-icon' height={25} width={25} />
//                             </div> */}
//                             <div className='cursor-pointer' onClick={storeAllChats}>
//                                 <Image src={SVGS.send} alt='send-icon' height={20} width={20} style={sendBtnStyle} />
//                             </div>
//                         </div>

//                     </div>

//                 </div>
                
//             </div>

//             <div className='w-[95%] md:w-2/4'>

//                 <div className='flex flex-col justify-between h-full'>
                    
//                     <div className='md:h-[25%]'>
//                         <div className={selectContainerClass} style={selectContainerStyle}>
                        
//                             <div className='mb-4'>

//                                 <div><label htmlFor="select-field-for-bucket" className={selectLabelClass}>Choose a bucket from S3:</label></div>

//                                 <div>
//                                     <select id='select-field-for-bucket' disabled={options.length === 0} className={selectClass} style={selectStyle} value={selectedOption} onChange={handleSelectChange}>
//                                         <option value="">Select an option</option>
//                                         {options.map((data, index) => (
//                                             <option key={index} value={data}>{data}</option>
//                                         ))}
//                                     </select>
//                                 </div>

//                             </div>

//                             <div className='w-full'>
//                                 <button onClick={handleBucketRequest} disabled={selectedOption === ''} className={fetchBtnClass}>
//                                     { isToggled ? <span className="loader-spinner"></span> : 'Fetch Bucket' }
//                                 </button>
//                             </div>

//                         </div>
//                     </div>

//                     <div className='md:h-[74%] mb-4 md:mb-0'>
//                         <div className={chartsClass}>
//                             {showPrompt ? reference !== '' ? <Charts /> : <PlaceholderContent content='chart' /> : null}
//                         </div>
//                     </div>

//                 </div>

//             </div>
            
//         </Container>
//     )

// }

// export default AIAssistant