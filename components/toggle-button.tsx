"use client"

import { useThemeContext } from '@/hooks'
import { MoonStarsFill, SunFill } from 'react-bootstrap-icons'

const ToggleButton = () => {

    const { toggleTheme } = useThemeContext();

    return (

        <div>
            <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} />
            <label htmlFor="checkbox" className="checkbox-label">
                <MoonStarsFill color='#f1c40f' />
                <SunFill color='#f39c12' />
                <span className="ball"></span>
            </label>
        </div>

    )

}

export default ToggleButton