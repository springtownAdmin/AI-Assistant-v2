import { MenuTypes } from "./types";
import pdfIcon from '@/public/icons/pdf.svg'
import txtIcon from '@/public/icons/txt.svg'
import csvIcon from '@/public/icons/csv.svg'
import docxIcon from '@/public/icons/docx.svg'
import uploadPath from '@/public/Images/upload.png';
import LogoIcon from '@/public/icons/logo.svg';
import LogoDarkIcon from '@/public/icons/logo-dark.svg';
import avatarIcon from '@/public/icons/user-avatar.svg';
import attachmentIcon from '@/public/icons/attachment.svg';
import sendBtnIcon from '@/public/icons/send.svg';

import FocusIcon from '@/public/icons/focus.svg';
import attachIcon from '@/public/icons/attach.svg';
import tryAskingIcon from '@/public/icons/try-asking.svg';

import FullLogo from '@/public/icons/springtown-ai-light.svg';
import FullLogoDark from '@/public/icons/springtown-ai-logo-dark.svg';

import Sources from '@/public/icons/sources.svg';
import answerIcon from '@/public/icons/answer.svg';
import relatedIcon from '@/public/icons/related.svg';
import addIcon from '@/public/icons/add.svg';
import starlab01 from '@/public/Images/starlab-01.jpeg'
import starlab02 from '@/public/Images/starlab-01.jpeg'

export const THEME = {
    PRIMARY: (opacity = 1) => `rgba(0, 19, 255, ${opacity})`,
    SECONDARY: (opacity = 1) => `rgba(66, 66, 66, ${opacity})`,
    WHITE: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    BLACK: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
}

export const menuItems: MenuTypes = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Features',
        link: '/features'
    },
    {
        id: 3,
        name: 'Applications',
        link: '/applications'
    },
    {
        id: 4,
        name: 'Demo',
        link: '/demo'
    },
    {
        id: 5,
        name: 'Contact Us',
        link: '/contact-us'
    }
];

export const ACCEPTED_FILES = ".pdf, .csv, .txt, .docx, .zip"

export const SVGS = {
    pdf: pdfIcon,
    txt: txtIcon,
    csv: csvIcon,
    docx: docxIcon,
    logo: LogoIcon,
    logoDark: LogoDarkIcon,
    avatar: avatarIcon,
    attachment: attachmentIcon,
    send: sendBtnIcon, 
    focus: FocusIcon,
    attach: attachIcon,
    tryAsking: tryAskingIcon,
    fullLogo: FullLogo,
    fullLogoDark: FullLogoDark,
    sources: Sources,
    answer: answerIcon,
    related: relatedIcon,
    add: addIcon
}

export const IMAGES = {
    upload: uploadPath,
    starlab01: starlab01,
    starlab02: starlab02,
}

export const FileTypes = {
    csv: (type: string) => type === "text/csv" || type === "application/vnd.ms-excel",
    pdf: (type: string) => type === "application/pdf",
    txt: (type: string) => type === "text/plain",
    docx: (type: string) => type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}

export const COLOR = {
    pdf: 'red',
    csv: 'green',
    docx: 'blue',
    txt: 'orange'
}

export const BGCOLOR = {
    pdf: 'rgba(255, 0, 0, 0.3)',
    csv: 'rgba(0, 128, 0, 0.3)',
    docx: 'rgba(66, 133, 244, 0.3)',
    txt: 'rgba(255, 165, 0, 0.3)'
}

export const getLogo = (isLight: boolean) => isLight ? SVGS.logo : SVGS.logoDark 

export const DummyAnswers = [
    {
        query: 'When was Nvidia founded?',
        answer: `April 5, 1993`,
        reference: ['Document-1.pdf']
    },
    {
        query: 'What is DGX?',
        answer: `DGX is a line of supercomputers by Nvidia. 

In April 2016, Nvidia produced the DGX-1 based on an 8 GPU cluster, to improve the ability of users to use deep learning by combining GPUs with integrated deep learning software. 
    
Nvidia gifted its first DGX-1 to OpenAI in August 2016 to help it train larger and more complex AI models with the capability of reducing processing time from six days to two hours. It also developed Nvidia Tesla K80 and P100 GPU-based virtual machines, which are available through Google Cloud, which Google installed in November 2016. 
    
Microsoft added GPU servers in a preview offering of its N series based on Nvidia's Tesla K80s, each containing 4992 processing cores.`,
        reference: ['Document-1.pdf']
    },
    {
        query: 'Can you tell me about yourself?',
        answer: 'Sorry ! I am Gen-AI and I cannot introduce myself.',
        reference: null
    }
]

export const CantFindAnswer = "Sorry ! I didn't have any answers for your query"

