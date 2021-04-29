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
			className={`fixed top-0 z-10 flex justify-between items-center py-0 px-6 md:px-10 lg:px-12 w-full bg-gray-900 bg-opacity-80 filter-none pointer-events-auto select-auto backdrop-filter backdrop-blur-md transition-all duration-300 ${scrolledToTop ? 'h-24' : 'h-18'} ${scrollDirection === 'up' && !scrolledToTop ? 'transform translate-y-0 shadow-xl' : ''} ${scrollDirection === 'down' && !scrolledToTop ? 'transform -translate-y-16 shadow-xl' : ''}`}
		>
			<nav className="flex justify-between items-center relative w-full text-gray-300 tracking-wide z-20">
				{/* logo */}
				<div className="flex justify-center items-center">
                    <Link href='/'>
                        <a className="inline-block relative w-10 h-10 text-yellow-400 transition-all duration-300">
                            <IconLogo />
                        </a>
                    </Link>
                </div>

				{/* links */}
				<div className="hidden md:flex items-center">
					{/* nav links */}
                    <ol className="flex justify-between items-center list-none p-0 m-0">
                        {navLinks && navLinks.map(({ name, url }, idx) => (
                            <li key={idx} className="my-0 mx-1.5 relative text-sm font-semibold">
                                <Link href={url}>
                                    <a className="inline-block relative p-2.5 hover:text-yellow-400 focus:text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-none">
										{name}
									</a>
                                </Link>
                            </li>
                        ))}
                    </ol>

					{/* resume link */}
                    <div>
                        <a 
							className="inline-block relative ml-4 text-sm font-semibold text-yellow-400 bg-transparent border border-yellow-400 rounded py-3 px-4 leading-none hover:bg-yellow-400 hover:bg-opacity-10 focus:outline-none transition-all duration-300" 
							href="/resume.pdf" 
							target="_blank" 
							rel="noopener noreferrer"
						>
							Resume
						</a>
                    </div>
                </div>
				
				{/* mobile toggle/menu */}
				<MobileMenu />
			</nav>

			{/* {scrollDirection === 'up' && !scrolledToTop && <style jsx>{`
				header {
					height: 64px;
					transform: translateY(0px);
					box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
				}
			`}</style>}

			{scrollDirection === 'down' && !scrolledToTop && <style jsx>{`
				header {
					height: 64px;
					transform: translateY(calc(64px * -1));
					box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
				}
			`}</style>} */}
		</header>
	)
}

export default Navbar
