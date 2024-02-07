"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { THEME, getLogo } from '@/utils/constants';
import { useThemeContext } from '@/hooks';
import Image from 'next/image';

const BotResponse = ({ response = '', reference = '' }) => {

    const { isDark, isLight } = useThemeContext();
    const textColor = { color: '#4285F4' }
    const darkColor = "#929292"

    const botContainerClass = `w-full ${isLight && 'bg-gray-50'} p-4`;
    const botContainerStyle = { color: isLight ? 'black' : darkColor, background: isLight ? '' : '#505050' };
    const logoContainer = `mr-5 ${isDark && 'opacity-30'}`;
    const referenceContainerStyle = { background: 'rgba(66, 133, 244,0.3)' };

    return (
            <motion.div className={botContainerClass} style={botContainerStyle} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.3, type: 'tween' }}>

                <div className='flex items-start'>

                    <Image src={getLogo(isLight)} alt="logo" width={18} height={18} className={logoContainer} />

                    <div className='w-[90%] text-justify'>

                        <p className='whitespace-pre-wrap'>{response}</p>

                        {reference !== '' && 
                            <>
                                <br />
                                <div>

                                    <h5 className='font-medium underline'>Reference:</h5>

                                    <div className='w-full my-2 flex flex-wrap'>

                                        {/* {v.reference.map((r, i) => (
                                        <div key={i} className='w-40 py-1 px-3 rounded-full text-center mr-2 mb-2' style={{ background: THEME.RGBA(0.3) }}>
                                            <div className='long-text' style={textColor}>{files.length !== 0 ? files[0].name : r}</div>
                                        </div>
                                        ))} */}

                                        <div className='w-40 py-1 px-3 rounded-full text-center mr-2 mb-2' style={referenceContainerStyle}>
                                            <div className='long-text' style={textColor}>{reference}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </>
                        }
                        
                    </div>
                </div>
            </motion.div>
    )

}

export default BotResponse