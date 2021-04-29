import { socialMedia } from '../config'
import { Side } from '.'
import { RenderIcon } from './icons'

function Social({ isHome }) {
    return (
        <Side isHome={isHome} position='left'>
            <ul className="flex flex-col items-center m-0 p-0 list-none">
                {socialMedia && socialMedia.map(({ name, url }, idx) => (
                    <li key={idx}>
                        <a 
                            href={url} 
                            className="inline-block relative p-2.5 transform hover:-translate-y-1 focus:-translate-y-1 transition-all duration-300"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <RenderIcon name={name} height='h-5' width='w-5' />
                        </a>
                    </li>
                ))}

                <style jsx>{`
                    ul:after {
                        content: '';
                        display: block;
                        width: 1px;
                        height: 90px;
                        margin: 0 auto;
                        background-color: var(--gray-400)
                    }
                    ul > li:last-of-type {
                        margin-bottom: 20px;
                    }
                `}</style>
            </ul>
        </Side>
    )
}

export default Social
