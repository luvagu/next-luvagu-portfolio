import { Layout, Hero, About, Experience, Featured, Metatags, Contact } from '../components'
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
			// revalidate: 1,
		}
	} catch (error) {
		console.log('Error: %s', error?.message)
		return {
			notFound: true,
		}
	}
}

export default function Home({ jobsData, featuredProjects }) {
	return (
		<Layout isHome={true}>
			<Metatags />
			<main className="fill-vertical">
				<Hero />
				<About />
				<Experience jobsData={jobsData} />
				<Featured featuredProjects={featuredProjects} />
				<Contact />
			</main>
		</Layout>
	)
}
