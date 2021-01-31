import { throttle } from "lodash"
import { useEffect, useMemo, useRef, useState } from "react"

export function useScrolledPastHeader (headerElementSelector: string) {
    const [scrolledPast, setScrolledPast] = useState<boolean>(false)
    
    const headerRef = useRef<HTMLElement>(
        typeof document !== 'undefined' ? document.querySelector(headerElementSelector) : null
    )
    const onScroll = useMemo(() => {
        return throttle(() => {
            const headerElement = headerRef.current

            if (headerElement) {
                setScrolledPast(window.pageYOffset > headerElement.clientHeight)
            } else {
                headerRef.current = document.querySelector(headerElementSelector)
            }
        }, 200)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', onScroll)

        onScroll()

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return scrolledPast
}