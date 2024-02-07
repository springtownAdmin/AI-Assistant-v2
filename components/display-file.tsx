"use client"

import { BGCOLOR, COLOR, SVGS } from '@/utils/constants'
import { DisplayFileTypes } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import { Trash3Fill, XLg } from 'react-bootstrap-icons'

const DisplayFile = ({ file, checkTypes, progress = 100, handleRemove }: DisplayFileTypes) => {

    const type = checkTypes(file.type);
    const dynamicBG = { background: BGCOLOR[type] }
    const dynamicProgress = { width: `${progress}%`, borderColor: COLOR[type] }

    return (
        <>
            <div className='flex items-center mb-3'>
                <div className='mr-4'>
                    <Image src={SVGS[type]} alt='pdf-icon' height={20} width={20} />
                </div>
                <div className='w-1/4'>
                    <div className='long-text'>
                        {file.name}
                    </div>
                </div>
                <div className='w-3/4 flex justify-end'>
                    {progress === 100 ? <Trash3Fill color='red' className='cursor-pointer' onClick={handleRemove} /> : <XLg color={COLOR[type]} className='cursor-pointer' />}
                </div>
            </div>
            { progress !== 100 &&
                <div style={dynamicBG} className={`w-full border`}>
                    <div style={dynamicProgress} className={`border`}></div>
                </div>
            }
        </>
    )
}

export default DisplayFile