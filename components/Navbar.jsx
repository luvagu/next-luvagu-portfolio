import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useScrollDirection } from '../hooks'
import { IconLogo } from './icons'
import { navLinks } from '../config'
import { MobileMenu } from '.'

function Navbar() {
	const scrollDirection = useScrollDirection('down')
	const [scrolledToTop, setScrolledToTop] = useState(true)

	const handleScroll = () => {
		setScrolledToTop(window.pageYOffset < 50)
	}

	useEffect(() => {
		// const timeout = setTimeout(() => {
		// 	setIsMounted(true)
		// }, 100)

		window.addEventListener('scroll', handleScroll)

		return () => {
			// clearTimeout(timeout)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`fixed top-0 z-10 flex justify-between items-center px-6 md:px-10 lg:px-12 w-full h-24 bg-gray-900 bg-opacity-80 filter-none pointer-events-auto select-auto backdrop-filter backdrop-blur-md transition-all duration-300 ${scrollDirection === 'up' && !scrolledToTop ? 'h-16 transform shadow-xl' : ''} ${scrollDirection === 'down' && !scrolledToTop ? 'h-16 transform -translate-y-16 shadow-xl' : ''}`}
		>
			<nav className="flex justify-between items-center relative w-full text-gray-300 z-20">
				{/* logo */}
				<div className="flex justify-center items-center">
                    <Link href='/'>
                        <a className="w-10 h-10 text-yellow-400">
                            <IconLogo />
                        </a>
                    </Link>
                </div>

				{/* links */}
				<div className="hidden md:flex items-center">
                    <ol className="list-none flex justify-between items-center">
                        {navLinks && navLinks.map(({ name, url }, idx) => (
                            <li key={idx} className="mx-1.5 relative text-sm font-semibold">
                                <Link href={url}>
                                    <a className="p-2.5 hover:text-yellow-400 focus:text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none">{name}</a>
                                </Link>
                            </li>
                        ))}
                    </ol>
                    <div className="">
                        <a className="ml-4 text-sm font-semibold text-yellow-400 border border-yellow-400 rounded py-2 px-4 duration-300 hover:bg-yellow-400 hover:bg-opacity-10 focus:outline-none" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
				<MobileMenu />
			</nav>
		</header>
	)
}

export default Navbar
