import { useEffect, useRef } from 'react'
import Image from 'next/image'
import scre from '../../utils/scre'
import { screConfig } from '../../config'
import { RenderIcon } from '../icons'

function Featured({ featuredProjects }) {    
    const revealTitle = useRef(null)
    const revealProjects = useRef([])

    useEffect(() => {
        scre.reveal(revealTitle.current, screConfig())
        revealProjects.current.forEach((ref, idx) => scre.reveal(ref, screConfig(idx * 100)))
    }, [])

    return (
		<section
			id="projects"
			className="m-0 mx-auto py-14 sm:py-20 md:py-24 px-0 max-w-5xl"
		>
			<h2 ref={revealTitle} className="section-heading">
				Apps I've Built
			</h2>

			{/* projects grid */}
			<ul className="p-0 m-0 list-none">
				{/* projects */}
				{featuredProjects &&
					featuredProjects.map(
						(
							{ external, title, tech, github, cover, html },
							idx
						) => (
							<li
								key={idx}
								ref={(e) => (revealProjects.current[idx] = e)}
								className="project relative grid gap-2.5 grid-cols-12 items-center project-box-shadow"
							>
								{/* project contents */}
								<div className="project-content relative">
									<div>
										<p className="project-label my-2.5 mx-0 text-yellow-400 font-mono text-sm font-normal">
											Pinned Project
										</p>

										<h3 className="project-title relative m-0 mb-2.5 md:mb-5 text-white md:text-gray-300 text-2xl sm:text-3xl font-semibold leading-none">
											{external ? (
												<a
													href={external}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-block static md:relative hover:text-yellow-400 focus:text-yellow-400 focus:outline-none transition-all duration-300"
												>
													{title}
												</a>
											) : (
												<span className="inline-block static md:relative hover:text-yellow-400 transition-all duration-300">
                                                    {title}
                                                </span>
											)}
										</h3>

										<div
											className="project-description relative py-5 px-0 md:p-6 rounded bg-transparent md:bg-gray-800 text-gray-300 text-base shadow-none md:shadow-xl hover:shadow-2xl transition-all duration-300"
											dangerouslySetInnerHTML={{
												__html: html,
											}}
										/>

										{tech.length && (
											<ul className="project-techs flex flex-wrap relative my-2.5 mx-0 md:mt-6 md:mb-2.5 md:mx-0 p-0 list-none">
												{tech.map((name, idx) => (
													<li
														key={idx}
														className="mt-0 mr-2.5 md:mr-5 mb-1.5 ml-0 text-gray-300 md:text-gray-400 font-mono text-sm whitespace-nowrap"
													>
														{name}
													</li>
												))}
											</ul>
										)}

										{/* links */}
										<div className="project-links flex items-center relative mt-2.5 -ml-2.5 text-gray-300">
											{github && (
												<a
													href={github}
													target="_blank"
													rel="noopener noreferrer"
													className="relative flex justify-center items-center p-2.5 hover:text-yellow-400 focus:text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
												>
													<RenderIcon
														name="GitHub"
														height="h-5"
														width="w-5"
													/>
												</a>
											)}

											{external && (
												<a
													href={external}
													target="_blank"
													rel="noopener noreferrer"
													className="relative flex justify-center items-center p-2.5 hover:text-yellow-400 focus:text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
												>
													<RenderIcon
														name="External"
														height="h-5"
														width="w-5 -mt-1"
													/>
												</a>
											)}
										</div>
									</div>
								</div>

								{/* project image */}
								<div className="project-cover relative opacity-25 md:opacity-100 shadow-lg hover:shadow-xl w-full max-w-full h-full bg-yellow-400 rounded align-middle overflow-hidden hover:bg-transparent transition-all duration-200">
									<div className="cover-filter relative rounded overflow-hidden mix-blend-multiply filter grayscale contrast-100 brightness-75 h-full">
										<Image
											alt={title}
											src={cover}
											layout="fill"
											objectFit="cover"
											objectPosition="top"
										/>
									</div>
								</div>
							</li>
						)
					)}
			</ul>

			<style jsx>{`
				ul a {
					position: relative;
					z-index: 1;
				}

				.project:not(:last-of-type) {
					margin-bottom: 100px;
				}

				.project-content {
					grid-column: 1 / 7;
					grid-row: 1 / -1;
				}

				.project:nth-of-type(odd) .project-content {
					grid-column: 7 / -1;
					text-align: right;
				}

				.project-title,
				.project-description,
				.project-techs {
					z-index: 2;
				}

				.project:nth-of-type(odd) .project-techs {
					justify-content: flex-end;
				}

				.project:nth-of-type(odd) .project-techs > li {
					margin: 0 0 5px 20px;
				}

				.project:nth-of-type(odd) .project-links {
					justify-content: flex-end;
					margin-left: 0;
					margin-right: -10px;
				}

				.project-cover {
					grid-column: 6 / -1;
					grid-row: 1 / -1;
					z-index: 1;
				}

				.project:nth-of-type(odd) .project-cover {
					grid-column: 1 / 8;
				}

				.project-cover:hover > .cover-filter,
				.project-cover:focus > .cover-filter {
					background: transparent;
					filter: none;
				}

				@media (max-width: 1080px) {
					.project-content {
						grid-column: 1 / 9;
					}

					.project:nth-of-type(odd) .project-content {
						grid-column: 5 / -1;
					}
				}

				@media (max-width: 768px) {
					.project:not(:last-of-type) {
						margin-bottom: 70px;
					}

					.project-box-shadow {
						box-shadow: 0 10px 30px -15px var(--dark-gray-shadow);
						transition: var(--transition-all);
					}

					.project-box-shadow:hover,
					.project-box-shadow:focus {
						box-shadow: 0 20px 30px -15px var(--dark-gray-shadow);
					}

					.project-content {
						display: flex;
						flex-direction: column;
						justify-content: center;
						height: 100%;
						grid-column: 1 / -1;
						padding: 40px 40px 30px;
						z-index: 5;
					}

					.project:nth-of-type(odd) .project-content {
						grid-column: 1 / -1;
						padding: 40px 40px 30px;
						text-align: left;
					}

					.project:nth-of-type(odd) .project-techs {
						justify-content: flex-start;
					}

					.project:nth-of-type(odd) .project-techs > li {
						margin: 0 10px 5px 0;
					}

					.project:nth-of-type(odd) .project-links {
						justify-content: flex-start;
						margin-left: -10px;
						margin-right: 0;
					}

					.project:nth-of-type(odd) .project-cover {
						grid-column: 1 / -1;
					}

					.project-description:hover {
						box-shadow: none;
					}

					.project-cover {
						grid-column: 1 / -1;
						height: 100%;
					}

					.cover-filter {
						object-fit: cover;
						width: auto;
						height: 100%;
					}
				}

				@media (max-width: 480px) {
					.project:not(:last-of-type) {
						margin-bottom: 30px;
					}

					.project-content {
						padding: 30px 25px 20px;
					}

					.project:nth-of-type(odd) .project-content {
						padding: 25px 25px 20px;
					}
				}
			`}</style>
		</section>
	)
}

export default Featured
