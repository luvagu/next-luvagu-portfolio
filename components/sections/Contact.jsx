import { useEffect, useRef } from 'react'
import { email, screConfig } from '../../config'
import scre from '../../utils/scre'

function Contact() {
    const revealObject = useRef(null)

    useEffect(() => {
        scre.reveal(revealObject.current, screConfig())
    }, [])

    return (
        <section id="contact" ref={revealObject} className="mt-0 mx-auto mb-12 md:mb-24 py-14 sm:py-20 md:py-24 px-0 max-w-600 text-center">
            <h2 className="block mb-4 mt-2.5 mx-0 w-full text-yellow-400 text-lg font-normal">Have Questions?</h2>

            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-gray-300 leading-tight">Contact Me</h2>
            
            <p>
                At present I am looking for new opportunities. 
                If you liked what you&apos;ve seen, get in touch with me. 
                I&apos;ll be happy to assist you!
            </p>

            <a 
                href={`mailto:${email}`}
                className="mt-12 inline-block relative text-yellow-400 text-base font-mono leading-none bg-transparent border border-yellow-400 rounded py-5 px-7 hover:bg-yellow-400 hover:bg-opacity-10 focus:outline-none transition-all duration-300"
            >
                Drop Me A Line
            </a>
        </section>
    )
}

export default Contact
