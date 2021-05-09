import Head from 'next/head'

function Metatags({
	title = 'Luis Vallejo (luvagu)',
	description = 'Luis Vallejo is a software developer who loves creating engaging web applications.',
	imageUrl = '/img/og.png',
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

			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
		</Head>
	)
}

export default Metatags
