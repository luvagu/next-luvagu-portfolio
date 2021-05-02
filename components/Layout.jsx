import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Email, Loader, Navbar, Social } from '.'

function Layout({ isHome, children }) {
	const [isLoading, setIsLoading] = useState(true)
	const { asPath } = useRouter()

	useEffect(() => {
		if (isLoading || asPath === '/') {
			return
		}

		if (asPath) {
			const id = asPath.substring(2) // asPath without the '/#'
			setTimeout(() => {
				const el = document.getElementById(id)
				if (el) {
					el.scrollIntoView()
					el.focus()
				}
			}, 0)
		}

	}, [isLoading])

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
