import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = await Document.getInitialProps(ctx)
	// 	return { ...initialProps }
	// }

	render() {
		return (
			<Html lang='en'>
				<Head>
					<Script
						src='https://www.googletagmanager.com/gtag/js?id=G-94QPTMT7G3'
						onLoad={() => {
							window.dataLayer = window.dataLayer || []
							function gtag() {
								dataLayer.push(arguments)
							}
							gtag('js', new Date())

							gtag('config', 'G-94QPTMT7G3')
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
