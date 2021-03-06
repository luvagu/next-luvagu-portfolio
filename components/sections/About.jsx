import { useEffect, useRef } from 'react'
import Image from 'next/image'
import scre from '../../utils/scre'
import { screConfig } from '../../config'

function About() {
	const skills = [
		'JavaScript (ES6+)',
		'Node.js / Express',
		'React',
		'Next.js',
		'Firebase / Vercel',
		'Mongo / FaunaDB',
	]
	const revealObject = useRef(null)

	useEffect(() => {
		scre.reveal(revealObject.current, screConfig())
	}, [])

	return (
		<section
			ref={revealObject}
			id='about'
			className='my-0 mx-auto py-14 sm:py-20 md:py-24 px-0 max-w-4xl'
		>
			<h2 className='section-heading'>About Me</h2>

			<div className='inner-section block md:grid gap-12'>
				<div>
					{/* about texts */}
					<div>
						<p className='mb-4'>
							Hello! I&apos;m Luis and I love creating apps and features for the
							web. My web development journey started back in 2010 when I would
							hire developers and designers to build a website or app for me,
							and it was always a black box where I would pay these developers
							and they&apos;ll come back with a product that I was never fully
							satisfied with.
						</p>
						<p className='mb-4'>
							So I started teaching myself how to code because I wanted to know
							how this black box works. Since then, I&apos;ve been developing,
							improving and maintaining productivity applications for my own
							side business, clients and employers. After working for so long
							with an older tech stack, in 2018, I decided to look for new
							opportunities and begun to learn a the MERN stack.
						</p>
						<p>
							Here are the technologies I&apos;ve been currently working with:
						</p>
					</div>

					{/* skill list */}
					<ul className='grid p-0 m-0 mt-5 overflow-hidden list-none'>
						{skills &&
							skills.map((skill, idx) => (
								<li
									key={idx}
									className='relative mb-2.5 pl-5 font-mono text-sm'
								>
									{skill}
								</li>
							))}
					</ul>
				</div>

				{/* avatar */}
				<div className='relative w-3/4 md:w-full max-w-300 mt-12 mx-auto md:m-0'>
					<div className='img-wrapper block relative w-full rounded bg-yellow-400 shadow-xl hover:shadow-2xl focus:shadow-2xl transition-all duration-300'>
						<div className='img-filter relative rounded overflow-hidden mix-blend-multiply filter grayscale contrast-100 transition-all duration-300'>
							<Image
								src='/img/me.png'
								alt='Luis Vallejo'
								width='500'
								height='500'
								layout='responsive'
							/>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.inner-section {
					grid-template-columns: 3fr 2fr;
				}

				ul {
					grid-template-columns: repeat(2, minmax(140px, 200px));
				}

				ul > li:before {
					content: '???';
					position: absolute;
					left: 0;
					top: 2px;
					color: var(--yellow-400);
					font-size: 14px;
					line-height: 12px;
				}

				.img-wrapper:hover,
				.img-wrapper:focus {
					background: transparent;
					outline: 0;
				}

				.img-wrapper:after {
					content: '';
					display: block;
					position: absolute;
					width: 100%;
					height: 100%;
					background-color: var(--gray-800);
					border-radius: 4px;
					transition: var(--transition-all);
					top: 20px;
					left: 20px;
					z-index: -1;
				}

				.img-wrapper:hover:after,
				.img-wrapper:focus:after {
					top: 15px;
					left: 15px;
					background: none;
					border: 2px solid var(--yellow-400);
				}

				.img-wrapper:hover > .img-filter,
				.img-wrapper:focus > .img-filter {
					filter: none;
					mix-blend-mode: normal;
				}
			`}</style>
		</section>
	)
}

export default About
