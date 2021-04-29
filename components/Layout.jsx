import { useState } from 'react'
import { Email, Loader, Navbar, Social } from '.'

function Layout({ isHome, children }) {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<div id="layout" className="min-h-screen grid">
			{isLoading && isHome ? (
				<Loader endLoading={() => setIsLoading(false)} />
			) : (
				<div className="flex flex-col min-h-screen">
					<Navbar isHome={isHome} />
					<Social isHome={isHome} />
					<Email isHome={isHome} />

					<div id="content">
                        {children}
					</div>
				</div>
			)}
            <style jsx>{`
                #layout {
                    grid-template-rows: 1fr auto;
                    grid-template-columns: 100%;
                }
            `}</style>
		</div>
	)
}

export default Layout
