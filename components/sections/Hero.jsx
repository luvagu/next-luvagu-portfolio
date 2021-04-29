function Hero() {
    return (
        <section className="flex justify-center items-start flex-col min-h-screen p-0">
            <h1 className="mt-0 mr-0 mb-7 ml-1 text-yellow-400 font-mono text-sm sm:text-base font-normal sm:font-semibold">
                Hello, my name is
            </h1>

            <h3></h3>

            <style jsx>{`
                @media (max-width: 480px) and (min-height: 700px) {
                    section {
                        padding-bottom: 10vh;
                    }
                }

                @media (max-width: 480px) {
                    section > h1 {
                        margin: 0 0 20px 2px;
                    }
                }
            `}</style>
        </section>
    )
}

export default Hero
