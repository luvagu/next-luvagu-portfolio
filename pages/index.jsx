import { Layout, Hero, About, Experience } from '../components'
import { getJobsSortedData } from '../utils/data'

export const getStaticProps = async () => {
	const jobsData = await getJobsSortedData()

	return {
		props: {
			jobsData,
		},
	}
}

export default function Home({ jobsData }) {
	return (
		<Layout isHome={true}>
			{/* className="my-0 mx-auto min-h-screen max-w-screen-2xl py-32 px-6 sm:py-36 sm:px-12 md:py-52 md:px-24 lg:py-52 lg:px-36" */}
			<main className="my-0 mx-auto min-h-screen max-w-screen-2xl py-0 px-6 sm:px-12 md:px-24 lg:px-36">
				<Hero />
				<About />
				<Experience jobsData={jobsData} />
			</main>
		</Layout>
	)
}
