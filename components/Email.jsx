import { Side } from "."
import { email } from "../config"

function Email({ home }) {
    return (
        <Side home={home} position='right'>
            <div id="email" className="flex flex-col items-center relative">
                <a 
                    href={`mailto:${email}`}
                    className="inline-block relative my-5 mx-auto p-2.5 text-sm leading-5 hover:text-yellow-400 focus:text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none tracking-widest transform hover:-translate-y-1 focus:-translate-y-1 transition-all duration-300"
                >
                    {email}
                </a>

                <style jsx>{`
                    #email:after {
                        content: '';
                        display: block;
                        width: 1px;
                        height: 90px;
                        margin: 0 auto;
                        background-color: var(--gray-400)
                    }

                    #email > a {
                        writing-mode: vertical-rl;
                    }
                `}</style>            
            </div>
        </Side>
    )
}

export default Email
