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

export default function Home({ jobsData}) {
	return (
		<Layout isHome={true}>
			<main className="fill-vertical">
				<Hero />
				<About />
				<Experience jobsData={jobsData} />
			</main>
		</Layout>
	)
}
