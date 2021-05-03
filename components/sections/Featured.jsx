import { useRef } from 'react'
import Image from 'next/image'
import { RenderIcon } from '../icons'

function Featured({ featuredProjects }) {
    const revealTitle = useRef(null)
    const revealProject = useRef([])

    return (
        <section id="projects" className="m-0 mx-auto py-14 sm:py-20 md:py-24 px-0 max-w-5xl">
            <h2 ref={revealTitle} className="section-heading">Apps I've Built</h2>

            {/* projects grid */}
            <ul className="p-0 m-0 list-none">
                {/* projects */}
                {featuredProjects && featuredProjects.map(({ external, title, tech, github, cover, html }, idx) => (
                    <li 
                        key={idx}
                        ref={(e) => (revealProject.current[idx] = e)}
                        className="relative grid gap-2.5 grid-cols-12 items-center project-box-shadow"
                    >
                        <div className="">
                            <div>
                                <p className="">Pinned Project</p>

                                <h3 className="">
                                    <a href={external} target="_blank" rel="noopener noreferrer">{title}</a>
                                </h3>

                                <div className="" dangerouslySetInnerHTML={{ __html: html }} />

                                {tech.length && (
                                    <ul className="">
                                        {tech.map((name, idx) => (
                                            <li key={idx}>{name}</li>
                                        ))}
                                    </ul>
                                )}

                                {/* links */}
                                <div className="">
                                    {github && (
                                        <a 
                                            href={github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className=""
                                        >
                                            <RenderIcon name='GitHub' />
                                        </a>
                                    )}

                                    {external && (
                                        <a 
                                            href={external} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className=""
                                        >
                                            <RenderIcon name='External' />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* project image */}
                        <div className="">
                            <Image src={cover} layout="fill" objectFit="cover" />
                        </div>
                    </li>
                ))}
            </ul>
            
            <style jsx>{`
                ul a {
                    position: relative;
                    z-index: 1;
                }

                @media (max-width: 768px) {
                    .project-box-shadow {
                        box-shadow: 0 10px 30px -15px var(--dark-gray-shadow);
                        transition: var(--transition-all);
                    }
                
                    .project-box-shadow:hover,
                    .project-box-shadow:focus {
                        box-shadow: 0 20px 30px -15px var(--dark-gray-shadow);
                    }
                }
            `}</style>
        </section>
    )
}

export default Featured
