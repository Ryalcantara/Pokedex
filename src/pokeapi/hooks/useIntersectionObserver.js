import { useState, useEffect } from 'react'

const opt = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}
/**
 * @param elementRef {ReactElementRef}
 * @param options {{root: ReactElement, rootMargin: string, threshold: number}}
 */

export default (elementRef, options = opt) => {
    const [isVisible, setVisible] = useState(false)

    function onUpdate(entries) {
        const [entry] = entries;
        setVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onUpdate, options)
        if (elementRef.current) observer.observe(elementRef.current)

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current)
        }
    }, [elementRef, options])

    return isVisible
}