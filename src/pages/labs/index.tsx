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
		</div>
	);
}
