import Link from 'next/link';

export default function GraphicLabs() {
	return (
		<div className="mx-auto max-w-prose space-y-8 px-6 py-24">
			<p>Computer Graphics</p>

			<ul className="list-outside list-disc space-y-4 [&_a:hover]:underline [&_a]:text-blue-400">

            {/* legacyBehavior */}

			<li>
			<Link href="/labs/graphics/bouncing" legacyBehavior>
				<a  rel="noopener noreferrer">Bouncing Graphics</a>
			</Link>
			<p className="text-sm">
				Objects bouncing across screen.
			</p>
			</li>


			<li>
			<Link href="/labs/graphics/2DTransforms" legacyBehavior>
				<a  rel="noopener noreferrer">2D Transformations</a>
			</Link>
			<p className="text-sm">
				2D Transformations
			</p>
			</li>


            <li>
			<Link href="/labs/graphics/SubroutineHierarchy" legacyBehavior>
				<a  rel="noopener noreferrer">Subroutine Hierarchy</a>
			</Link>
			<p className="text-sm">
				2D Transformations
			</p>
			</li>

            <li>
			<Link href="/labs/graphics/3DModels" legacyBehavior>
				<a  rel="noopener noreferrer">3D Models</a>
			</Link>
			<p className="text-sm">
				3D Models
			</p>
			</li>

            <li>
			<Link href="/labs/graphics/PolyhedraModels" legacyBehavior>
				<a  rel="noopener noreferrer">Polyhedra</a>
			</Link>
			<p className="text-sm">
            Polyhedra
			</p>
			</li>


            <li>
			<Link href="/labs/graphics/Carousel" legacyBehavior>
				<a  rel="noopener noreferrer">Carousel</a>
			</Link>
			<p className="text-sm">
            Carousel
			</p>
			</li>


				
			</ul>

			<footer className="mx-auto flex max-w-3xl items-center justify-center px-6 pb-12 text-sm text-neutral-600 [&_a:hover]:text-neutral-400 [&_a]:p-4 [&_a]:transition-colors">
				{/* <Link href="https://github.com/alii/website">Source</Link> */}

                <Link href="/labs">[ all labs ]</Link>
				<Link href="/">[ home ]</Link>


				
				{/* <Link href="/experiments">Experiments</Link> */}
			</footer>
		</div>
	);
}
