import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Catalyst</title>
				<meta
					name="description"
					content="A recommendation for the HDFC card users"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
				/>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
					rel="stylesheet"
				/>

				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap"
					rel="stylesheet"
				/>

				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
					crossOrigin="anonymous"
				/>
			</Head>

			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
				crossOrigin="anonymous"
			/>
			<Component {...pageProps} />
		</>
	);
}
