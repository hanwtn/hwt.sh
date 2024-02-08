import Link from 'next/link';

export default function ExperimentsList() {
	return (
		<div className="mx-auto max-w-prose space-y-8 px-6 py-24">
			<p>This is a list of random experiments I've built on this website. There's not a lot here</p>

			<ul className="list-outside list-disc space-y-4 [&_a:hover]:underline [&_a]:text-blue-400">
				<li>
					<Link href="/experiments/morphing-shapes">Morphing Shapes</Link>
					<p className="text-sm">
						Animating and shifting divs using just css transitions and JS to initiate them
					</p>
				</li>

				<li>
					<Link href="/monzo/dashboard">Monzo Dashboard</Link>
					<p className="text-sm">
						Using the Monzo API to display personal account details. Unfortunately, the Monzo API
						requires me to manually add users, so if you want access, contact me.
					</p>
				</li>
			</ul>
		</div>
	);
}
