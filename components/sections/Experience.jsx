import { useEffect, useRef, useState } from 'react'
import { screConfig } from '../../config'
import scre from '../../utils/scre'
import { CSSTransition } from 'react-transition-group'

const TabButton = ({ isActive, label, ...props }) => {
	return (
		<button 
			className={`relative flex items-center w-full h-10 border-l-2 border-gray-500 bg-transparent font-mono text-sm text-left whitespace-nowrap hover:text-yellow-400 focus:text-yellow-400 hover:bg-gray-800 focus:bg-gray-800 focus:outline-none transition-all duration-300 ${isActive ? 'text-yellow-400' : 'text-gray-400'}`}
			{...props}
		>
			<span>{label}</span>

			<style jsx>{`
				button {
					padding: 0 20px 2px;
				}

				@media (max-width: 768px) {
					button {
						padding: 0 15px 2px;
					}
				}

				@media (max-width: 600px) {
					button {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 120px;
						min-width: 120px;
						padding: 0 15px;
						border-left: 0;
						border-bottom: 2px solid var(--gray-500);
						text-align: center;
					}
				}
			`}</style>
		</button>
	)
}

const Highlight = ({ activeTabId }) => {
	return (
		<div className="highlight absolute top-0 left-0 z-10 w-0.5 h-10 rounded bg-yellow-400">
			<style jsx>{`
				.highlight {
					transform: translateY(calc(${activeTabId} * 40px));
  					transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  					transition-delay: 0.1s;
				}

				@media (max-width: 600px) {
					.highlight {
						top: auto;
						bottom: 0;
						width: 100%;
						max-width: 120px;
						height: 2px;
						margin-left: 50px;
						transform: translateX(calc(${activeTabId} * 120px));
					}
				}
				
				@media (max-width: 480px) {
					.highlight {
						margin-left: 25px;
					}
				}
			`}</style>
		</div>
	)
}
	
const TabPanels = ({ children }) => {
	return (
		<div className="relative w-full ml-5">
			{children}

			<style jsx>{`
				@media (max-width: 600px) {
					div {
						margin-left: 0;
					}
				}
			`}</style>
		</div>
	)
}

const TabContent = ({ title, url, company, range, html, ...props }) => {
	return (
		<div className="w-full h-auto py-2.5 px-1.5" {...props}>
			<h3 className="mb-1 text-xl leading-tight font-medium text-gray-300">
				<span>{title}</span>
				<span className="text-yellow-400">
					{' '} @ {' '} 
					{url === '#' 
						? company 
						: (<a className="inline-link" href={url} target="_blank" rel="noopener noreferrer">{company}</a>)
					}
				</span>
			</h3>

			<p className="mb-5 text-gray-400 font-mono text-sm">{range}</p>

			<div className="tabpanel-list" dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	)
}

function Experience({ jobsData }) {
	console.log(jobsData)
	
	const [activeTabId, setActiveTabId] = useState(0)
	const revealObject = useRef(null)

	useEffect(() => {
		scre.reveal(revealObject.current, screConfig())
	}, [])

	return (
		<section ref={revealObject} id="experience" className="my-0 mx-auto py-14 sm:py-20 md:py-24 px-0 max-w-700">
			<h2 className="section-heading">My Work Experience</h2>

			<div className="inner-section flex">
				{/* tab list buttons */}
                <div className="tab-list relative w-max p-0 m-0">
					{jobsData && jobsData.map(({ company }, idx) => (
						<TabButton key={idx} isActive={activeTabId === idx} label={company} onClick={() => setActiveTabId(idx)} />
					))}
					<Highlight activeTabId={activeTabId} />
				</div>

				{/* tab panels */}
				<TabPanels>
					{jobsData && jobsData.map(({ title, url, company, range, html }, idx) => (
						<CSSTransition key={idx} in={activeTabId === idx} timeout={300} classNames='fade'>
							<TabContent
								title={title} 
								url={url} 
								company={company} 
								range={range} 
								html={html} 
								aria-hidden={activeTabId !== idx}
								hidden={activeTabId !== idx}
							/>
						</CSSTransition>
					))}
				</TabPanels>
            </div>

            <style jsx>{`
                @media (min-width: 700px) {
                    .inner-section {
                        min-height: 340px;
                    }
                }

				.tab-list {
					z-index: 3;
				}

				@media (max-width: 600px) {
					.inner-section {
						display: block;
					}

					.tab-list {
						display: flex;
						overflow-x: auto;
						width: calc(100% + 100px);
						padding-left: 50px;
						margin-left: -50px;
						margin-bottom: 30px;
					}
				}

				@media (max-width: 480px) {
					.tab-list {
						width: calc(100% + 50px);
						padding-left: 25px;
						margin-left: -25px;
					}
				}
            `}</style>
		</section>
	)
}

export default Experience
