import { Layout, Hero, About, Experience, Featured } from '../components'
import { getFeaturedProjects, getJobsSortedData } from '../utils/data'

export const getStaticProps = async () => {
	try {
		const jobsData = await getJobsSortedData()
		const featuredProjects = await getFeaturedProjects()

		return {
			props: {
				jobsData,
				featuredProjects,
			},
			revalidate: 1,
		}
	} catch (error) {
		console.log('Error: %s', error?.message)
		return {
			notFound: true,
		}
	}
}

export default function Home({ jobsData}) {
	return (
		<Layout isHome={true}>
			<main className="fill-vertical">
				<Hero />
				<About />
				<Experience jobsData={jobsData} />
				<Featured featuredProjects={featuredProjects} />
			</main>
		</Layout>
	)
}
