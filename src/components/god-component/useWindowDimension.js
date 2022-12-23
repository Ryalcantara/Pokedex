import { useState, useEffect } from 'react'

function getDimension() {
    const { innerHeight, innerWidth } = window
    return { height: innerHeight, width: innerWidth };
}

export default () => {
    const [currentDimension, setCurrentDimension] = useState(getDimension())
    useEffect(() => {
        function handleWindowResize() {
            setCurrentDimension(getDimension())
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            //destroy event listener when closed
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return currentDimension;
}