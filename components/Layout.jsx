import { useState } from 'react'
import { Loader, Navbar } from '.'

function Layout({ children }) {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<div id="rootDiv" className="min-h-screen grid">
			{isLoading ? (
				<Loader endLoading={() => setIsLoading(false)} />
			) : (
				<div className="flex flex-col min-h-screen">
					<Navbar />
					<div id="content">
                        {children}
					</div>
				</div>
			)}
            <style jsx>{`
                #rootDiv {
                    grid-template-rows: 1fr auto;
                    grid-template-columns: 100%;
                }
            `}</style>
		</div>
	)
}

export default Layout
