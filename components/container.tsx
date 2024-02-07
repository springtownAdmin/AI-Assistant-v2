"use client";

import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import { SVGS, getLogo } from '@/utils/constants'
import { Twitter, Linkedin, Robot, BarChartFill, CardText, EnvelopeFill } from 'react-bootstrap-icons'
import { useThemeContext } from '@/hooks'
import { ToggleButton } from './index';
import { useRouter } from 'next/navigation';

interface ContainerProp {
    activeId?: number,
    children: ReactNode
}

const Container: React.FC<ContainerProp> = ({ children, activeId = 1 }) => {

    const [submit, setSubmit] = React.useState(true);
    const [isHovered, setHovered] = React.useState(false);
    const router = useRouter();

    const [active, setActive] = useState(activeId);

    const handleEnter = () => setHovered(true);

    const handleLeave = () => setHovered(false);

    const goTo = (id: number, redirects: string) => {

        setActive(id);
        router.push(redirects);

    }
    
    return (

        <div className='md:h-screen md:flex w-full'>

            <div className={`hidden md:block w-[20%] transition-all duration-500 py-8 px-2`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>

                <div className='flex p-3 mb-3'>
                    <Image src={SVGS.fullLogo} alt='logo' height={200} width={200} className='' />
                </div>

                <div className='flex flex-col gap-3 justify-between'>
                    <div onClick={() => goTo(1, '/')} className={`flex gap-4 items-center p-3 cursor-pointer hover:bg-[#d7d7d7] rounded-lg transition-all duration-200 text-[#808080] ${active === 1 && 'bg-[#d7d7d7]'}`}><Robot size={25} /> RAG </div>
                    <div onClick={() => goTo(2, '/informabot')} className={`flex gap-4 p-3 cursor-pointer hover:bg-[#d7d7d7] rounded-lg transition-all duration-200 text-[#808080] ${active === 2 && 'bg-[#d7d7d7]'}`}><BarChartFill size={25} /> InformaBot</div>
                    <div  className={`flex gap-4 p-3 cursor-pointer hover:bg-[#d7d7d7] rounded-lg transition-all duration-200 text-[#808080] ${active === 3 && 'bg-[#d7d7d7]'}`}><CardText size={25} /> Meeting Summarizer</div>
                    <div  className={`flex gap-4 p-3 cursor-pointer hover:bg-[#d7d7d7] rounded-lg transition-all duration-200 text-[#808080] ${active === 4 && 'bg-[#d7d7d7]'}`}><EnvelopeFill size={25} /> Email Generator</div>
                </div>

            </div>

            <div className={`w-full ${submit ? 'h-fit' : 'h-full'} md:h-full md:w-[95%] bg-[#fcfcf9] md:m-2 rounded-lg text-gray-400`}>
                {children}
            </div>

        </div>

    )

}

export default Container