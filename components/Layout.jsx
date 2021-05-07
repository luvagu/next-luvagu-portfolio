import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Email, Footer, Loader, Navbar, Social } from '.'

function Layout({ home, children }) {
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
			{isLoading && home ? (
				<Loader endLoading={() => setIsLoading(false)} />
			) : (
				<div className="flex flex-col min-h-screen">
					<Navbar home={home} />
					<Social home={home} />
					<Email home={home} />

					<div id="content">
                        {children}
						<Footer />
					</div>
				</div>
			)}
		</div>
	)
}

export default Layout
