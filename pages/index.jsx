import { useState } from 'react'
import { Loader, Navbar } from '../components'

export default function Home() {
	const [isLoading, setIsLoading] = useState(true)

	return isLoading ? (
		<Loader finishLoading={() => setIsLoading(false)} />
	) : (
		<div id="rootDiv" className="min-h-screen grid">
			<Navbar />
			<div id="content">
				<main className="my-0 mx-auto min-h-screen max-w-screen-2xl py-32 px-6 sm:py-36 sm:px-12 md:py-52 md:px-24 lg:py-52 lg:px-36">
					<div className="text-white">content</div>
				</main>
			</div>
			<style jsx>{`
				#rootDiv {
					grid-template-rows: 1fr auto;
					grid-template-columns: 100%;
				}
			`}</style>
		</div>
	)
}
