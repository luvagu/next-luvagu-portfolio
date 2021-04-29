function Side({ position, children }) {
    return (
        <div className={`hidden md:block w-10 fixed z-10 text-gray-400 bottom-0 ${position === 'left' ? 'left-5 lg:left-10' : 'left-auto'} ${position === 'right' ? 'right-5 lg:right-10' : 'right-auto'}`}>
            {children}
        </div>
    )
}

export default Side
