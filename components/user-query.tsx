"use client";

import React from 'react';
import Image from 'next/image';
import { SVGS } from '@/utils/constants';
import { useThemeContext } from '@/hooks';

const UserQuery = ({ query = '' }) => {

  const darkColor = '#929292'
  const { isDark, isLight } = useThemeContext();
  const userAvatarStyle: React.CSSProperties = { filter: isLight ? 'none' : 'grayscale(1)' }
  const queryStyle: React.CSSProperties = { width: '90%', textAlign: 'justify', color: isLight ? 'black' : darkColor }

  return (
    <div className='flex p-4'>
        <Image src={SVGS.avatar} alt="user-avatar" width={25} height={25} className='mr-5' style={userAvatarStyle} />
        <div style={queryStyle}>
            {query}
        </div>
    </div>
  )

}

export default UserQuery