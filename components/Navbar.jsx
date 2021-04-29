import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useScrollDirection } from '../hooks'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { IconLogo } from './icons'
import { loaderDelay, navLinks } from '../config'
import { MobileMenu } from '.'

function Navbar({ isHome }) {
	const [isMounted, setIsMounted] = useState(!isHome)
	const scrollDirection = useScrollDirection('down')
	const [scrolledToTop, setScrolledToTop] = useState(true)

	const handleScroll = () => {
		setScrolledToTop(window.pageYOffset < 50)
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(true)
		}, 100)

		window.addEventListener('scroll', handleScroll)

		return () => {
			clearTimeout(timeout)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const delay = isHome ? loaderDelay : 0
	const fadeUp = isHome ? 'fade' : ''
	const fadeDown = isHome ? 'fadedown' : ''

	console.log({isMounted, isHome})
	return (
		<header
			className={`fixed top-0 z-10 flex justify-between items-center py-0 px-6 md:px-10 lg:px-12 w-full bg-gray-900 bg-opacity-80 filter-none pointer-events-auto select-auto backdrop-filter backdrop-blur-md transition-all duration-300 ${scrolledToTop ? 'h-24' : 'h-18'} ${scrollDirection === 'up' && !scrolledToTop ? 'transform translate-y-0 shadow-xl' : ''} ${scrollDirection === 'down' && !scrolledToTop ? 'transform -translate-y-16 shadow-xl' : ''}`}
		>
			<nav className="flex justify-between items-center relative w-full text-gray-300 tracking-wide z-20">
				{/* logo */}
				<TransitionGroup component={null}>
					{isMounted && (
						<CSSTransition classNames={fadeUp} timeout={delay}>
							<div className="flex justify-center items-center">
								<Link href='/'>
									<a className="inline-block relative w-10 h-10 text-yellow-400 transition-all duration-300">
										<IconLogo />
									</a>
								</Link>
							</div>
						</CSSTransition>
					)}
				</TransitionGroup>

				{/* links */}
				<div className="hidden md:flex items-center">
					{/* nav links */}
                    <ol className="flex justify-between items-center list-none p-0 m-0">
						<TransitionGroup component={null}>
							{isMounted && navLinks && navLinks.map(({ name, url }, idx) => (
								<CSSTransition key={idx} classNames={fadeDown} timeout={delay}>
									<li 
										className="my-0 mx-1.5 relative text-sm font-semibold" 
										style={{ transitionDelay: `${isHome ? idx * 100 : 0}ms` }}
									>
										<Link href={url}>
											<a className="inline-block relative p-2.5 hover:text-yellow-400 focus:text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-none">
												{name}
											</a>
										</Link>
									</li>
								</CSSTransition>
							))}
						</TransitionGroup>
                    </ol>

					{/* resume link */}
                    <TransitionGroup component={null}>
						{isMounted && (
							<CSSTransition classNames={fadeDown} timeout={delay}>
								<div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
									<a 
										className="inline-block relative ml-4 text-sm font-semibold text-yellow-400 bg-transparent border border-yellow-400 rounded py-3 px-4 leading-none hover:bg-yellow-400 hover:bg-opacity-10 focus:outline-none transition-all duration-300" 
										href="/resume.pdf" 
										target="_blank" 
										rel="noopener noreferrer"
									>
										Resume
									</a>
								</div>
							</CSSTransition>
						)}
					</TransitionGroup>
                </div>
				
				{/* mobile toggle/menu */}
				<MobileMenu />
			</nav>
		</header>
	)
}

export default Navbar
