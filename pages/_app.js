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
