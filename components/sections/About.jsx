function About() {
    return (
        <section className="my-0 mx-auto py-14 sm:py-20 md:py-24 px-0 max-w-4xl">
            <h2 className="flex items-center relative mt-2 mx-0 mb-10 w-full text-2xl sm:text-3xl font-semibold whitespace-nowrap">About Me</h2>

            <div id="inner" className="block md:grid gap-12">
                {/* about texts */}
                <div>
                    <p></p>
                </div>
                
                {/* skill list */}
                <ul className="grid p-0 m-0 mt-5 overflow-hidden list-none">
                    <li className="relative mb-2.5 pl-5 font-mono text-sm"></li>
                </ul>

                {/* avatar */}
                <div className="relative max-w-xs mt-12 mx-auto md:m-0">
                    <div className="block relative w-full rounded bg-yellow-400 hover:bg-transparent shadow-lg hover:shadow-xl focus:shadow-xl transition-all duration-300"></div>
                </div>
            </div>

            <style jsx>{`
                #inner {
                    grid-template-columns: 3fr 2fr;
                }
                #inner > ul {
                    grid-template-columns: repeat(2, minmax(140px, 200px));
                }
                #inner > ul > li:before {
                    content: '•';
                    position: absolute;
                    left: 0;
                    color: var(--yellow-400);
                    font-size: 14px;
                    line-height: 12px;
                }
            `}</style>
        </section>
    )
}

export default About
