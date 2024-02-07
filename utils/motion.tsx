import { MotionProps } from "framer-motion"
import { THEME } from "./constants"

export const drawerAnimate = (isToggled: boolean) => {

    const slideLeftAnimate = {
        open: { width: "70%" },
        close: { width: "0%", paddingLeft: 0, paddingRight: 0 }
    }

    return {
        animate: isToggled ? "open" : "close",
        variants: slideLeftAnimate,
        transition: { duration: 0.4, type: 'tween', ease: 'easeInOut' }
    }

}

export const transitionTweenEffect: MotionProps = {

    transition: { duration: 0.5, type: 'tween' }

}

export const menuHover: any = {

    transition: { duration: 0.3 },
    whileHover: { color: THEME.PRIMARY, scale: 1.07 }

}

export const buttonVisibility = (isToggled: boolean) => {

    return {
        animate: { opacity: isToggled ? 1 : 0 }
    }

}

export const hexagonAnimate = (seq = 0, reflect = false) => {


    const hexagon1 = {
        default: { opacity: 0 },
        hexAnimate: { opacity: 1 }
    }

    const hexagon2 = {
        default: { left: 0, top: 0 },
        hexAnimate: { left: reflect ? '-27px' : 27, top: reflect ? '-21px' : 21 }
    }

    const hexagon3 = {
        default: { left: 0, top: 0 },
        hexAnimate: { left: reflect ? '-54px' : 54, top:  reflect ? '-44px' : 44 }
    }

    const transitionEffect = {
        duration: 1.5,
        ease: "easeInOut",
        type: "tween"
    }

    const variants = [hexagon1, hexagon2, hexagon3];

    return {
        initial: 'default',
        animate: 'hexAnimate',
        variants: variants[seq],
        transition: transitionEffect
    }

}

export const textFallAnimate: MotionProps = {

    initial: { opacity: 0, translateY: '-25px' },
    animate: { opacity: 1, translateY: 0 },
    transition: { duration: 0.5, type: 'tween' }

}

export const scaleOnTap: MotionProps = {

    whileTap: { scale: 0.80 }

}

export const scaleOnTapControl = (disabled: boolean) => {
    return { whileTap: disabled ? {} : { scale: 0.80 } };
}

export const squeezeButtonAnimate: MotionProps = {
    transition: { duration: 0.5, type: 'tween' },
    whileTap: { scale: 0.8 }
}

export const popUpAnimate: MotionProps = {

    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeIn' } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.15, ease: 'easeOut' } }
          
}

export const backdropAnimate: MotionProps = {

    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }

}

export const loadingContainerAnimate: MotionProps = {
    
    variants: { initial: { transition: { staggerChildren: 0.2 } }, animate: { transition: { staggerChildren: 0.2 } } },
    initial: "initial",
    animate: "animate",

}

export const loadingDotsAnimate: MotionProps = {

    variants: { animate: { y: ["0%", "25%", "50%", "100%", "50%", "25%", "0%"], transition: { duration: 0.75, repeat: Infinity, ease: "easeInOut" } } },
    transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }

}

export const loaderAnimate: MotionProps = {
    
    transition: { duration: '1.5', repeat: Infinity, type: 'tween', ease: 'linear' },
    initial: { rotate: '0deg', filter: 'hue-rotate(0)' },
    animate: { rotate: '360deg', filter: 'hue-rotate(360deg)' }

}