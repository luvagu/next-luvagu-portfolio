import { useEffect, useRef, useState } from 'react'
import { screConfig } from '../../config'
import scre from '../../utils/scre'

const TabButton = ({ isActive, label, ...props }) => {
	return (
		<button 
			className={`relative flex items-center w-full h-10 pt-0 px-4 md:px-5 pb-0.5 border-l-2 border-gray-500 bg-transparent font-mono text-sm whitespace-nowrap hover:text-yellow-400 focus:text-yellow-400 hover:bg-gray-800 focus:bg-gray-800 focus:outline-none transition-all duration-300 ${isActive ? 'text-yellow-400' : 'text-gray-400'}`}
			{...props}
		>
			{label}

			<style jsx>{`
				@media (max-width: 600px) {
					button {
						justify-content: center;
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
		<div className="relative w-full ml-0 sm:ml-5">{children}</div>
	)
}

const TabPanel = ({ title, url, company, range, html }) => {
	return (
		<div className="w-full h-auto py-2.5 px-1.5">
			<h3 className="mb-0.5 text-xl leading-tight font-medium text-gray-300">
				<span>{title}</span>
				<span className="text-yellow-400">
					{' '} @ {' '} 
					<a href={url} targe="_blank" rel="noopener noreferrer">{company}</a>
				</span>
			</h3>

			<p className="mb-6 text-gray-400 font-mono text-sm">{range}</p>

			<div dangerouslySetInnerHTML={{ __html: html }} />

			<style jsx>{`
				ul {
					padding: 0;
					margin: 0;
					list-style: none;
					font-size: 18px;
				}

				ul > li {
					position: relative;
					padding-left: 30px;
					margin-bottom: 10px;
				}
				
				ul > li:before {
                    content: '•';
                    position: absolute;
                    left: 0;
                    color: var(--yellow-400);
                    // font-size: 14px;
                    // line-height: 12px;
                }
			`}</style>
		</div>
	)
}

function Experience({ jobsData }) {
	console.log(jobsData);

	const [activeTabId, setActiveTabId] = useState(0)
	const revealObject = useRef(null)

	useEffect(() => {
		scre.reveal(revealObject.current, screConfig())
	}, [])

	return (
		<section ref={revealObject} id="experience" className="my-0 mx-auto py-14 sm:py-20 md:py-24 px-0 max-w-700">
			<h2 className="section-heading">My Work Experience</h2>

			<div className="inner-section block sm:flex">
				{/* tab list */}
                <div className="tab-list relative w-max p-0 m-0 list-none">
					{jobsData && jobsData.map(({ company }, idx) => (
						<TabButton key={idx} isActive={activeTabId === idx} label={company} onClick={() => setActiveTabId(idx)} />
					))}
				</div>

				{/* tab panels */}
				<TabPanels>

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
					.tab-list {
						display: flex;
						overflow-x: auto;
						width: calc(100% + 100px);
						padding-left: 50px;
						margin-left: -50px;
						margin-bottom: 30px;
					}

					.tab-list > li:first-of-type {
						margin-left: 50px;
					}

					.tab-list > li:last-of-type {
						padding-right: 50px;
					}
				}

				@media (max-width: 480px) {
					.tab-list {
						width: calc(100% + 50px);
						padding-left: 25px;
						margin-left: -25px;
					}

					.tab-list > li:first-of-type {
						margin-left: 25px;
					}

					.tab-list > li:last-of-type {
						padding-right: 25px;
					}
				}
            `}</style>
		</section>
	)
}

export default Experience
