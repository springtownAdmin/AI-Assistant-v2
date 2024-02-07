"use client";

import { useThemeContext } from '@/hooks'
import { getLogo } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

const WelcomeChat = () => {

  const { isLight } = useThemeContext();
  const textStyle: React.CSSProperties = { letterSpacing: 1, color: isLight ? 'black' : 'white' }

  return (
    <>

        <div className='flex flex-col h-full justify-center items-center opacity-20'>
            <div>
                <Image src={getLogo(isLight)} alt='logo' height={100} className='select-none disable-drag' />
            </div>
            <div className='mt-4 font-bold text-center select-none' style={textStyle}>SpringTown's AI Assistant</div>
        </div>
    </>
  )

}

export default WelcomeChat