import Head from 'next/head'

function Metatags({
	title = 'Luis Vallejo (luvagu)',
	description = 'Luis Vallejo is a software developer who loves creating engaging web applications.',
	imageUrl = '/img/me.png',
}) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@luiavag" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />
		</Head>
	)
}

export default Metatags
