import { socialMedia } from "../config"
import { RenderIcon } from "./icons"

function Footer() {
    return (
        <footer className="flex justify-center items-center flex-col h-auto p-4 text-center">
            {/* social icons */}
            <div className="block w-full max-w-max mt-0 mx-auto mb-2.5 text-gray-400 md:hidden">
                <ul className="flex justify-between items-center p-0 m-0 list-none">
                    {socialMedia && socialMedia.map(({ name, url }, idx) => (
                        <li key={idx}>
                            <a 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block relative p-2.5 hover:text-yellow-400 focus:text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
                            >
                                <RenderIcon name={name} height='h-5' width='w-5' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* credits */}
            <div className="text-gray-400 font-mono text-sm leading-none">
                <a 
                    href="https://github.com/luvagu/next-luvagu-portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block relative p-2.5 hover:text-yellow-400 focus:text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
                >
                    <div>Built by Luis Vallejo (luvagu)</div>
                </a>
            </div>

            <style jsx>{`
                footer {
                    min-height: 70px;
                }
            `}</style>
        </footer>
    )
}

export default Footer
