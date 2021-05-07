import { useEffect, useState } from 'react'
import { loaderDelay } from '../config'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function Side({ home, position, children }) {
	const [isMounted, setIsMounted] = useState(!home)

    useEffect(() => {
        if (!home) return
        const timeout = setTimeout(() => setIsMounted(true), loaderDelay)
        return () =>  clearTimeout(timeout)
    }, [])

	return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition classNames={home ? 'fade' : ''} timeout={loaderDelay}>
                    <div className={`hidden md:block w-10 fixed z-10 text-gray-400 bottom-0 ${position === 'left' ? 'left-5 lg:left-10' : 'left-auto'} ${position === 'right' ? 'right-5 lg:right-10' : 'right-auto'}`}>
                        {children}
                    </div>
                </CSSTransition>
            )}
        </TransitionGroup>
	)
}

export default Side
