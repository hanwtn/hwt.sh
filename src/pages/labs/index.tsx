import Link from 'next/link';

export default function ExperimentsList() {
	return (
		<div className="mx-auto max-w-prose space-y-8 px-6 py-24">
			<p>This is a list of random experiments.</p>

			<ul className="list-outside list-disc space-y-4 [&_a:hover]:underline [&_a]:text-blue-400">



			<li>
			<Link href="/labs/graphics/bouncing" legacyBehavior>
				<a target="_blank" rel="noopener noreferrer">Bouncing Graphics</a>
			</Link>
			<p className="text-sm">
				Objects bouncing across screen.
			</p>
			</li>


				
			</ul>

			<footer className="mx-auto flex max-w-3xl items-center justify-center px-6 pb-12 text-sm text-neutral-600 [&_a:hover]:text-neutral-400 [&_a]:p-4 [&_a]:transition-colors">
				{/* <Link href="https://github.com/alii/website">Source</Link> */}

				<Link href="/">[ home ]</Link>

				
				{/* <Link href="/experiments">Experiments</Link> */}
			</footer>
		</div>
	);
}
