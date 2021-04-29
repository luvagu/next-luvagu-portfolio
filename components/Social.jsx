function Social() {
    return (
        <ul className="flex flex-col items-center m-0 p-0 list-none">
            <li>
                <a 
                    href="" 
                    className="inline-block relative p-2.5 transform hover:-translate-y-1 focus:-translate-y-1 transition-all duration-300"
                    target="_blank"
                >

                </a>
            </li>

            <style jsx>{`
                ul:after {
                    content: '';
                    display: block;
                    width: 1px;
                    height: 90px;
                    margin: 0 auto;
                    background-color: var(--gray-400)
                }
                li:last-of-type: {
                    margin-bottom: 20px;
                }
            `}</style>
        </ul>
    )
}

export default Social
