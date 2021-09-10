import { useEffect, useState } from 'react'
import { email, loaderDelay, navDelay } from '../../config'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function Hero() {
	const [isMonted, setIsMonted] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => setIsMonted(true), navDelay)
		return () => clearTimeout(timeout)
	}, [])

	const item1 = (
		<h1 className='mt-0 mr-0 mb-6 ml-1 text-yellow-400 font-mono text-base sm:text-lg font-normal leading-none'>
			Hello, my name is
		</h1>
	)

	const item2 = (
		<h2 className='m-0 text-gray-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-none'>
			Luis Vallejo
		</h2>
	)

	const item3 = (
		<h3 className='mt-3 text-gray-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-none'>
			I create apps for the web.
		</h3>
	)

	const item4 = (
		<p className='m-0 mt-5 max-w-lg'>
			I&apos;m a Brighton-based self-taught full-stack javascript software
			developer who loves building engaging web applications and features that
			result in exceptional experiences.
		</p>
	)

	const item5 = (
		<a
			href={`mailto:${email}`}
			className='mt-12 inline-block relative text-yellow-400 text-base font-mono leading-none bg-transparent border border-yellow-400 rounded py-5 px-7 hover:bg-yellow-400 hover:bg-opacity-10 focus:outline-none transition-all duration-300'
		>
			Get In Touch
		</a>
	)

	const heroItems = [item1, item2, item3, item4, item5]

	return (
		<section className='flex justify-center items-start flex-col min-h-screen p-0 my-0 mx-auto max-w-5xl'>
			<TransitionGroup component={null}>
				{isMonted &&
					heroItems.map((item, idx) => (
						<CSSTransition key={idx} classNames='fadeup' timeout={loaderDelay}>
							<div style={{ transitionDelay: `${(idx + 1) * 100}ms` }}>
								{item}
							</div>
						</CSSTransition>
					))}
			</TransitionGroup>

			<style jsx>{`
				@media (max-width: 480px) and (min-height: 700px) {
					section {
						padding-bottom: 10vh;
					}
				}

				@media (max-width: 480px) {
					section > h1 {
						margin: 0 0 20px 2px;
					}
				}
			`}</style>
		</section>
	)
}

export default Hero
