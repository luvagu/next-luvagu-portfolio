import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { navLinks } from '../config'
import { useOnClickOutside } from '../hooks'

const HamburgerButton = ({ menuOpen, toggleMenu }) => {
    return (
        <button
            className="md:hidden flex justify-center items-center relative z-10 -mr-4 p-4 border-0 bg-transparent text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none"
            onClick={toggleMenu}
        >
            <div className="inline-block relative w-8 h-6">
                <div id="hamburger" className={`absolute top-1/2 right-0 w-8 h-0.5 rounded bg-yellow-400 transition-transform duration-200 ${menuOpen ? 'delay-150' : 'delay-0'} transform ${menuOpen ? 'rotate-225' : 'rotate-0'}`} />

                <style jsx>{`
                    button {
                        transition-timing-function: linear;
                        transition-duration: 0.15s;
                        transition-property: opacity, filter;
                    }
                    #hamburger:before,
                    #hamburger:after {
                        content: '';
                        display: block;
                        position: absolute;
                        left: auto;
                        right: 0;
                        width: 2rem;
                        height: 2px;
                        border-radius: 4px;
                        background-color: var(--yellow-400);
                        transition-timing-function: ease;
                        transition-duration: 0.15s;
                        transition-property: transform;
                    }
                    #hamburger:before {
                        width: ${menuOpen ? '100%' : '120%'};
                        top: ${menuOpen ? '0' : '-10px'};
                        opacity: ${menuOpen ? 0 : 1};
                        transition: ${menuOpen ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s' : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
                    }
                    #hamburger:after {
                        width: ${menuOpen ? `100%` : `80%`};
                        bottom: ${menuOpen ? `0` : `-10px`};
                        transform: rotate(${menuOpen ? `-90deg` : `0`});
                        transition: ${menuOpen ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s' : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
                    }
                `}</style>
            </div>
        </button>
    )
}

const Sidebar = ({ menuOpen, setMenuOpen }) => {
    return (
        <aside className="md:hidden flex justify-center items-center fixed top-0 right-0 bottom-0 py-12 px-2.5 h-screen bg-gray-800 transition-all duration-300">
            <nav className="flex justify-between items-center flex-col w-full text-gray-300 text-center">
                <ol className="list-none w-full">
                {navLinks && navLinks.map(({ url, name }, idx) => (
                    <li 
                        key={idx}
                        className="relative mx-auto mt-0 mb-2.5 sm:mb-5 text-sm sm:text-base font-semibold"
                    >
                        <Link href={url}>
                            <a 
                                className="w-full p-5 inline-block relative transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400" 
                                onClick={() => setMenuOpen(false)}
                            >
                                {name}
                            </a>
                        </Link>
                    </li>
                ))}
                </ol>
                <a 
                    className="py-5 px-12 mt-1 mx-auto mb-0 text-yellow-400 text-sm font-semibold bg-transparent border border-yellow-400 rounded transition-all duration-300 hover:bg-yellow-400 hover:bg-opacity-10 focus:outline-none" 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </nav>
            <style jsx>{`
                aside {
                    width: min(75vw, 400px);
                    outline: 0;
                    box-shadow: -10px 0px 30px -15px var(--dark-gray-shadow);
                    z-index: 9;
                    transform: translateX(${menuOpen ? 0 : 100}vw);
                    visibility: ${menuOpen ? 'visible' : 'hidden'};
                }
            `}</style>
        </aside>
    )
}

function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    const onResize = (e) => {
        if (e.currentTarget.innerWidth > 768) {
          setMenuOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
    
        return () => {
          window.removeEventListener('resize', onResize)
        }
    }, [])

    const wrapperRef = useRef()
    
    useOnClickOutside(wrapperRef, () => setMenuOpen(false))

	return (
        <div className="block md:hidden">
            <div ref={wrapperRef}>
                <HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
                <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>

            {/* blur content when mobile menu is open */}
            {menuOpen && <style global jsx>{`
                body { 
                    overflow: hidden;
                }

                header {
                    background-color: transparent;
                }
                    
                #content > * {
                    filter: blur(5px) brightness(0.7);
                    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                    pointer-events: none;
                    user-select: none;
                }
            `}</style>}
        </div>
    )
}

export default MobileMenu
