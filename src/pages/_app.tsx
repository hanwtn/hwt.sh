import '../globals.css';

import type {AppProps} from 'next/app';
import {Newsreader} from 'next/font/google';
import font from 'next/font/local';
import Head from 'next/head';
import {useEffect} from 'react';
import {Toaster} from 'react-hot-toast';
import {useFirstEverLoad, useVisitCounts} from '../hooks/use-first-ever-load';

const title = Newsreader({
	subsets: ['latin'],
	weight: ['400', '200'],
	style: 'italic',
	fallback: ['serif'],
});

const body = font({
	src: '../fonts/roobert-variable.woff2',
});

export default function App({Component, pageProps}: AppProps) {
	useFirstEverLoad();

	const [_, set] = useVisitCounts();

	useEffect(() => {
		set(x => x + 1);
	}, [set]);

	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-title: ${title.style.fontFamily};
						--font-body: ${body.style.fontFamily};
					}
				`}
			</style>

			<Head>
				<title>Han Tun</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link rel="icon" href="/favicon.ico" />

				
			</Head>

   <script strategy="afterInteractive" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEM}`}></script>
			<script>
			{`window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', '${process.env.GOOGLE_ANALYTICS_MEM}');
			page_path: window.location.pathname,
			`}
			</script>

			<Component {...pageProps} />

			<Toaster />
		</>
	);
}
