import clsx from 'clsx';
import { motion } from "framer-motion";
import Link from 'next/link';
import {FiArrowUpRight} from 'react-icons/fi';

import { FaRegPaperPlane  } from "react-icons/fa";
// import {ContactForm} from '../components/contact-form';
import {CardHoverEffect, hoverClassName} from '../components/hover-card';

// import {formatList} from '../utils/lists';

// const Separator = () => {
// 	return (
// 	  <motion.div
// 		className="h-0.5 bg-gray-800 dark:bg-gray-300 my-6 col-span-full"
// 		initial={{ width: 0 }}
// 		animate={{ width: '100%' }}
// 		transition={{ duration: 0.5 }}
// 	  />
// 	);
//   };

export default function Home() {
	


	return (
		<div className="space-y-6">
			<main className="mx-auto grid max-w-3xl grid-cols-6 gap-3 px-6 pt-16">
				<div className="col-span-4 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-500/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-4">
				<div className="flex">
					<Link
						className="flex items-center justify-center space-x-1.5 rounded-full bg-blue-300 px-2 py-0.5 font-title dark:bg-blue-500/25"
						href="mailto:hello@hantun.ca"
						target="_blank"
						rel="noopener noreferrer"
					>
						<motion.div
							initial={{ rotate: 0, transformOrigin: "center" }}
							animate={{ rotate: 360 }}
							transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
							style={{ display: "flex", transformOrigin: "center", justifyContent: "center", textAlign: "center", alignItems: "center", 
		
	                        }}
                        >
							<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="#ffff" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
							</svg>
						</motion.div>
						<span className="text-xs">Available for work</span>
						
					</Link>
				</div>


					<div className="space-y-4">
						<div>
							<h1 className="text-xl text-blue-900 dark:text-blue-300 dark:text-glow-blue-500/50">
								Han (Win) Tun
							</h1>

							<p className="text-blue-600 dark:text-blue-300/80 dark:text-glow-blue-500/50">
								creating something...
							</p>
							
						</div>
					</div>
				</div>



				<CardHoverEffect className="col-span-2 h-full">
					<Link
						href="mailto:hi@hantun.ca"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'flex h-full items-center justify-center rounded-2xl bg-yellow-400 text-4xl text-black dark:bg-yellow-800 dark:text-white',
							hoverClassName,
						)}
					>
					
						<span className="transform-gpu transition duration-500 group-hover:scale-[1.3] text-xs">
							{/* <SiX /> */}
							{/* <p>hantun.ca</p> */}
							<FaRegPaperPlane className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</Link>
				</CardHoverEffect>




				<CardHoverEffect className="col-span-3 h-full md:col-span-3">
					<Link
						href="https://hantun.ca"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
							hoverClassName,
						)}
					>
						<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
						    <img
								src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjgweWg1bHhhaWl2cnM2NTkzcGc0YjNpZG42ZDVxOXJscXM3NWI4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2aQS3AHfvvfIkSdbFM/giphy.gif"
								alt="Gradient Gif"
								className="absolute inset-0 h-full w-full object-cover object-center invert dark:brightness-[0.7] dark:invert-0"
							/>

							<span
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
							/>
						</span>

						<span aria-hidden className="px-6 pt-6">
						    <span className="flex justify-between">
								<div className="text-3xl"></div>
								<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
						</span>

						<span className="space-y-0.5 px-6 pb-6">
							<span className="block font-semibold">Portfolio</span>

							<span className="block text-sm">developments & visuals</span>
						</span>
					</Link>
				</CardHoverEffect>
				<CardHoverEffect className="col-span-3 h-full md:col-span-3">
					<Link
						href="https://i.hwt.sh"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
							hoverClassName,
						)}
					>
						<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
							<img
								src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjYwOGgwcXN5Yzd6bGZ5bW9xZmt6bWFwd3YweXU4NTlvOGFtZ2UxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A1oBMukTqFfkoY1HiH/giphy.gif"
								alt="Photo Gif"
								className="absolute inset-0 h-full w-full object-cover object-center dark:brightness-[0.7]"
							/>

							<span
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
							/>
						</span>

						<span aria-hidden className="px-6 pt-6">
							<span className="flex justify-between">
								<div className="text-3xl"></div>
								<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
						</span>

						<span className="space-y-0.5 px-6 pb-6">
							<span className="block font-semibold">Gallery</span>

							<span className="block text-sm">moments in my life</span>
						</span>
					</Link>
				</CardHoverEffect>
{/* 


				<div className="grid grid-cols-4 gap-3 col-span-full">

				<CardHoverEffect className="col-span-2 h-full md:col-span-1">
					<Link
						href="https://www.linkedin.com/in/hanwt/"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
							hoverClassName,
						)}
					>
						<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
							<img
								src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjYwOGgwcXN5Yzd6bGZ5bW9xZmt6bWFwd3YweXU4NTlvOGFtZ2UxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A1oBMukTqFfkoY1HiH/giphy.gif"
								alt="Photo Gif"
								className="absolute inset-0 h-full w-full object-cover object-center dark:brightness-[0.7]"
							/>

							<span
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
							/>
						</span>

						<span aria-hidden className="px-6 pt-6">
							<span className="flex justify-between">
								<div className="text-3xl"></div>
								<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>

							<span className="space-y-0.5 px-6 pb-6">
							<span className="block text-sm">LinkedIn</span>
						</span>
							
						</span>

						

					
					</Link>
				</CardHoverEffect>
				<CardHoverEffect className="col-span-2 h-full md:col-span-1">
					<Link
						href="https://github.com/xhanwt"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
							hoverClassName,
						)}
					>
						<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
							<img
								src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjYwOGgwcXN5Yzd6bGZ5bW9xZmt6bWFwd3YweXU4NTlvOGFtZ2UxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A1oBMukTqFfkoY1HiH/giphy.gif"
								alt="Photo Gif"
								className="absolute inset-0 h-full w-full object-cover object-center dark:brightness-[0.7]"
							/>

							<span
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
							/>
						</span>

						<span aria-hidden className="px-6 pt-6">
							<span className="flex justify-between">
								<div className="text-3xl"></div>
								<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
						</span>

			
					</Link>
				</CardHoverEffect>
				<CardHoverEffect className="col-span-2 h-full md:col-span-1">
					<Link
						href="https://www.instagram.com/hanwtn"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
							hoverClassName,
						)}
					>
						<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
							<img
								src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjYwOGgwcXN5Yzd6bGZ5bW9xZmt6bWFwd3YweXU4NTlvOGFtZ2UxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A1oBMukTqFfkoY1HiH/giphy.gif"
								alt="Photo Gif"
								className="absolute inset-0 h-full w-full object-cover object-center dark:brightness-[0.7]"
							/>

							<span
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
							/>
						</span>

						<span aria-hidden className="px-6 pt-6">
							<span className="flex justify-between">
								<div className="text-3xl"></div>
								<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
						</span>

				
					</Link>
				</CardHoverEffect>
				<CardHoverEffect className="col-span-2 h-full md:col-span-1 justify-center">
					<Link
						href="https://youtube.com/@hanwt"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
							hoverClassName,
						)}
					>
						<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
							<img
								src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjYwOGgwcXN5Yzd6bGZ5bW9xZmt6bWFwd3YweXU4NTlvOGFtZ2UxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A1oBMukTqFfkoY1HiH/giphy.gif"
								alt="Photo Gif"
								className="absolute inset-0 h-full w-full object-cover object-center dark:brightness-[0.7]"
							/>

							<span
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
							/>
						</span>

						<span aria-hidden className="px-6 pt-6">
							<span className="flex justify-between">
								<div className="text-3xl"></div>
								<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
						</span>

					</Link>
				</CardHoverEffect>
				
				
				

				</div> */}

	
			
				
			</main> 

			<footer className="mx-auto flex max-w-3xl items-center justify-center px-6 pb-12 text-sm text-neutral-600 [&_a:hover]:text-neutral-400 [&_a]:p-4 [&_a]:transition-colors">
				{/* <Link href="https://github.com/alii/website">Source</Link> */}

				
				<Link href="/info">[ More ]</Link>
				{/* <Link href="/experiments">Experiments</Link> */}
			</footer>
		</div>
	);
}
