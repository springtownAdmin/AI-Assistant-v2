"use client";

import { useState } from 'react'

const useTheme = () => {

    const [ theme, setTheme ] = useState("light");

    const setDarkTheme = () => setTheme("dark");

    const setLightTheme = () => setTheme("light");

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const isDark = theme === "dark";

    const isLight = theme === "light";
  
    return { setDarkTheme, setLightTheme, toggleTheme, isLight, isDark, theme };

}

export default useTheme