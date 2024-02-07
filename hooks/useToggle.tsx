"use client";

import { useState } from 'react';

const useToggle = () => {

    const [ isToggled, setToggle ] = useState(false);

    const handleToggle = () => setToggle(!isToggled);

    const handleOpen = () => setToggle(true);

    const handleClose = () => setToggle(false);

    return { isToggled, handleToggle, handleOpen, handleClose };

}

export default useToggle