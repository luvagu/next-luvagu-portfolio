function Hero() {
    return (
        <section className="flex justify-center items-start flex-col min-h-screen p-0">
            <h1 className="mt-0 mr-0 mb-7 ml-1"></h1>

            <h3></h3>

            <style jsx>{`
                @media (max-width: 480px) {
                    section {
                        padding-bottom: 10vh;
                    }

                    section > h1 {
                        margin: 0 0 20px 2px;
                    }
                }
            `}</style>
        </section>
    )
}

export default Hero
