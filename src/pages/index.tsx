import clsx from 'clsx';
import dayjs from 'dayjs';
import type {GetStaticProps} from 'next';
import { motion } from "framer-motion";
import Link from 'next/link';
import {FiArrowUpRight, FiArrowRight} from 'react-icons/fi';
import { MdOutlineSaveAlt } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import {
	
	SiDiscord,
	SiDocker,
	SiGit,
	SiGithub,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiWebpack,
	SiDevpost,
	SiPython,
	SiAdobe,
	SiFigma,
	SiFramer,
SiInstagram,
SiYoutube
} from 'react-icons/si';
import { TbBrandCpp, TbBrandThreejs } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";


import {useLanyardWS, type Data} from 'use-lanyard';
// import {ContactForm} from '../components/contact-form';
import {CardHoverEffect, hoverClassName} from '../components/hover-card';
import {Time} from '../components/time';
import matrix from '../images/matrix.gif';
// import {getMapURL} from '../server/apple-maps';
import {getRecentBlogPosts, type PartialBlogPost} from '../server/blog';
import {env} from '../server/env';
import {getLanyard} from '../server/lanyard';
import {discordId} from '../utils/constants';
// import {formatList} from '../utils/lists';

export interface Props {
	lanyard: Data;
	map: string;
	location: string;
	recentBlogPosts: PartialBlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const lanyard = await getLanyard(discordId);
	const location = lanyard.kv.location ?? env.DEFAULT_LOCATION;

	// const map = getMapURL(location);
	const map = "";

	const allBlogPosts = await getRecentBlogPosts();
	const recentBlogPosts = allBlogPosts
		.sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix())
		.slice(0, 3);

	return {
		revalidate: 10,
		props: {
			map,
			location,
			lanyard,
			recentBlogPosts,
		},
	};
};

export default function Home(props: Props) {
	const lanyard = useLanyardWS(discordId, {
		initialData: props.lanyard,
	})!;

	const status = lanyard.discord_status ?? 'offline';

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
								{/* {age} y/o full stack typescript engineer */}
								A Creative Developer
							</p>
							
						</div>
					</div>
				</div>



				<CardHoverEffect className="col-span-2 h-full">
					<Link
						href="https://hanwintun.com"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'flex h-full items-center justify-center rounded-2xl bg-neutral-200 text-4xl text-black dark:bg-neutral-800 dark:text-white',
							hoverClassName,
						)}
					>
						<span className="sr-only">Portfolio</span>
						<span className="transform-gpu transition duration-500 group-hover:scale-[1.3] text-xs">
							{/* <SiX /> */}
							Works
							<p>hantun.ca</p>
							<FiArrowRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</Link>
				</CardHoverEffect>

				{/* Links */}
				<div className="grid grid-cols-2 gap-3 col-span-3 md:col-span-2" style={{ gridTemplateRows: '1fr 1fr' }}>

				<CardHoverEffect className={clsx(
					'items-center justify-center rounded-2xl text-4xl md:col-span-1 flex bg-blue-400 dark:bg-blue-600 '
				)}>
					<Link
						href="https://devpost.com/hanwt"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'flex h-full items-center justify-center rounded-2xl text-4xl',
							hoverClassName,
						)}
					>
						<div className="flex items-center justify-center" style={{color: 'white'}}> 
						<SiDevpost className="inline scale-[0.7] md:scale-[0.8]" />
						</div>
					</Link>
				</CardHoverEffect>

				<CardHoverEffect className={clsx(
					'items-center justify-center rounded-2xl text-4xl md:col-span-1 flex bg-blue-400 dark:bg-blue-600 '
				)}>
					<Link
						href="https://www.linkedin.com/in/hanwt/"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'flex h-full items-center justify-center rounded-2xl text-4xl',
							hoverClassName,
						)}
					>
						<div className="flex items-center justify-center" style={{color: 'white'}}> 
						<FaLinkedinIn className="inline scale-[0.7] md:scale-[0.8]" />
						</div>
					</Link>
				</CardHoverEffect>

				<CardHoverEffect className={clsx(
					'items-center justify-center rounded-2xl text-4xl md:col-span-1 flex bg-blue-400 dark:bg-blue-600  '
				)}>
					<Link
						href="https://youtube.com/@hanwt"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'flex h-full items-center justify-center rounded-2xl text-4xl',
							hoverClassName,
						)}
					>
						<div className="flex items-center justify-center" style={{color: 'white'}}> 
						<SiYoutube className="inline scale-[0.7] md:scale-[0.8]" />
						</div>
					</Link>
				</CardHoverEffect>

				<CardHoverEffect className={clsx(
					'items-center justify-center rounded-2xl text-4xl md:col-span-1 flex bg-blue-400 dark:bg-blue-600  '
				)}>
					<Link
						href="https://www.instagram.com/hanwtn"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'flex h-full items-center justify-center rounded-2xl text-4xl',
							hoverClassName,
						)}
					>
						<div className="flex items-center justify-center" style={{color: 'white'}}> 
						<SiInstagram className="inline scale-[0.7] md:scale-[0.8]" />
						</div>
					</Link>
				</CardHoverEffect>

	

				</div>
				

				<div className="col-span-3 grid shrink-0 grid-cols-1 gap-3  md:col-span-1 [&_>_div]:shrink-0">

				<Time />

				<div
					className={clsx(
						'items-center justify-center rounded-2xl',
						{
							online: 'bg-green-400 text-green-900 dark:bg-green-600 dark:text-green-50',
							idle: 'bg-orange-400 text-orange-50 ',
							dnd: 'bg-red-500 text-red-100 dark:bg-red-600',
							offline: 'bg-blurple text-white/90',
						}[status],
					)}
				>
					<div className="-rotate-[10deg] md:-rotate-[10deg] scale-[0.5] text-center md:scale-[0.8] md:h-full h-20">
						<h2>
							<SiDiscord className="inline" />
							<br></br>
							<span>{status}</span>
						</h2>

						<p className="text-base">
							<span>@{lanyard.discord_user.username}</span>
						</p>
					</div>
					
				</div>
				</div>

				

				<CardHoverEffect className="col-span-3 flex h-full min-h-[13rem] flex-shrink-0 overflow-hidden rounded-2xl"> 
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
								src={matrix.src}
								alt="The Matrix scrolling characters effect"
								className="absolute inset-0 h-full w-full object-cover object-center invert dark:brightness-[0.7] dark:invert-0"
							/>

							<span
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
							/>
						</span>

						<span aria-hidden className="px-6 pt-6">
							<span className="flex justify-between">
								<SiGithub className="text-3xl" />
								<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
						</span>

						<span className="space-y-0.5 px-6 pb-6">
							<span className="block font-semibold">GitHub</span>

							<span className="block text-sm">My open source work &amp; contributions.</span>
						</span>
					</Link>
				</CardHoverEffect>
			

				<div className="col-span-3 flex items-center justify-center rounded-2xl bg-fuchsia-700 p-6 text-fuchsia-100 md:col-span-2">
					<div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
					    
						<SiJavascript size={24}/>
						<SiMongodb size={24}/>
						<SiReact size={24} />
						<SiTypescript size={24} />
						
						<SiTailwindcss size={24} />
						<SiWebpack size={24} />
						<TbBrandThreejs size={24}/>
						<SiFramer size={24}/>
  
						<SiNextdotjs size={24} />
						<SiNodedotjs size={24} />
						<TbBrandCpp  size={24}/>
						<SiPython  size={24}/>


						<FaJava size={24}/>
						<SiDocker size={24} />
						<BiLogoSpringBoot size={24}/>
						<SiPostgresql size={24}/>

						<SiGit size={24} />
						<SiVisualstudiocode size={24}/>
						<SiAdobe size={24}/>
						<SiFigma size={24}/>

						
						
						
						
						
						
					</div>
				</div>

				<div className="col-span-6 space-y-2 rounded-2xl bg-yellow-200 p-6 dark:bg-indigo-800 md:col-span-4">
					<h2 className="font-semibold">
						Introduction <span className="inline dark:hidden">🌻</span>
						<span className="hidden dark:inline">⭐</span>
					</h2>

					<p>
					Hi! I’m Han. I am passionate about IxD, creative coding and visual storytelling, and I seek to combine my technical and artistic abilities to create innovative and impactful solutions.
					
					</p>

					<p>
					I am currently studying Computing Science and Interactive Arts at {' '}
						<Link className="underline" href="https://sfu.ca">
							SFU
						</Link>
						.
					</p>
				</div>

				{/* <div className="col-span-6 space-y-1 rounded-2xl bg-yellow-500 p-6 text-black md:col-span-6">
					<h1 className="font-semibold text-black/70">
						Recent Blog Posts{' '}
						<span className="text-yellow-800">
							<Link href="https://hantun.blog">— hantun.blog</Link>
						</span>
					</h1>

					<div className="space-y-2 pt-2">
						{props.recentBlogPosts.slice(0, 3).map(post => {
							return (
								<Link
									className="-mx-6 block px-6 py-2 hover:bg-yellow-600/50"
									key={post.slug}
									href={`https://hantun.blog/${post.slug}`}
								>
									<h2 className="text-black">{post.name}</h2>
									<p className="line-clamp-2 text-black/80">{post.excerpt}</p>
								</Link>
							);
						})}
					</div>
				</div> */}

		        {/* <CardHoverEffect className="col-span-3 h-full md:col-span-3">
					<Link
						href="https://github.com/alii"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
							hoverClassName,
						)}
					>
						<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
							<img
								src={matrix.src}
								alt="The Matrix scrolling characters effect"
								className="absolute inset-0 h-full w-full object-cover object-center invert dark:brightness-[0.7] dark:invert-0"
							/>

							<span
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
							/>
						</span>

						<span aria-hidden className="px-6 pt-6">
							<span className="flex justify-between">
								<SiGithub className="text-3xl" />
								<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
						</span>

						<span className="space-y-0.5 px-6 pb-6">
							<span className="block font-semibold">GitHub</span>

							<span className="block text-sm">My open source work &amp; contributions.</span>
						</span>
					</Link>
				</CardHoverEffect>

				<CardHoverEffect className="col-span-3 h-52">
					{!lanyard?.spotify || !lanyard.spotify.album_art_url ? (
						<Link
							href="https://open.spotify.com/playlist/15bl4PuutD4aS2GVsJGUk9"
							target="_blank"
							rel="noopener noreferrer"
							className={clsx(
								'group relative flex h-full overflow-hidden rounded-2xl',
								hoverClassName,
							)}
						>
							<span className="absolute inset-0 -z-10">
								<img
									src="https://i.scdn.co/image/ab67706c0000da84a15b50aca103257f2c7f4797"
									className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-50"
									alt="Album cover art"
								/>
							</span>

							<span className="flex flex-1 flex-col justify-between p-6 text-white">
								<span className="flex justify-between">
									<SiSpotify className="text-2xl" />
									<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
								</span>

								<div className="space-y-0.5">
									<h2 className="font-title font-bold">
										<span className="font-medium">playlist:</span> bedtime dnb
									</h2>

									<p className="text-sm">
										Drum and bass to send you to sleep, or host afters with.
									</p>  
								</div>
							</span>
						</Link>
					) : (
						<Link
							href={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
							target="_blank"
							rel="noopener noreferrer"
							className={clsx(
								'group relative flex h-full overflow-hidden rounded-2xl',
								hoverClassName,
							)}
						>
							<span className="absolute inset-0 -z-10">
								<img
									src={lanyard.spotify.album_art_url}
									className="absolute inset-0 h-full w-full scale-[1.15] bg-black object-cover object-center brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.35] group-hover:brightness-[0.4]"
									alt="Album cover art"
								/>
							</span>

							<span className="flex flex-1 flex-col justify-between p-6 text-white">
								<span className="flex justify-between">
									<SiSpotify className="text-2xl" />
									<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
								</span>

								<span>
									<h2>
										<span
											className="mb-0.5 mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"
											aria-hidden
										/>{' '}
										Listening to{' '}
										<span className="font-bold" suppressHydrationWarning>
											{lanyard.spotify.song}
										</span>{' '}
										by{' '}
										<span className="font-bold" suppressHydrationWarning>
											{formatList(lanyard.spotify.artist.split('; '), 'conjunction')}
										</span>
										.
									</h2>
								</span>
							</span>
						</Link>
					)}
				</CardHoverEffect>
				*/}

				{/* <div className="col-span-6 space-y-4 rounded-2xl bg-lime-400 p-6 text-black dark:bg-lime-500 md:col-span-6">
					<ContactForm />
				</div> */}
				
			</main> 

			<footer className="mx-auto flex max-w-3xl items-center justify-center px-6 pb-12 text-sm text-neutral-600 [&_a:hover]:text-neutral-400 [&_a]:p-4 [&_a]:transition-colors">
				{/* <Link href="https://github.com/alii/website">Source</Link> */}
				<Link href="/stats">Stats</Link>
				{/* <Link href="/experiments">Experiments</Link> */}
			</footer>
		</div>
	);
}
