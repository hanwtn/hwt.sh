import { motion } from 'framer-motion'
import { ArrowCircleUpIcon } from '@heroicons/react/outline'
const TwitterCard = ({ section }) => {
	return (
		<motion.a
			href="https://twitter.com/AnaArsonist"
			target="_blank"
			rel="noreferrer"
			animate={{ opacity: ['all', 'about', 'contact'].includes(section) ? 1 : 0.3 }}
			className="flex justify-center items-center bg-sky-200 relative dark:bg-sky-700 rounded-3xl col-span-1"	
			whileHover="groupHover"
			variants={{
				groupHover: {
					scale: 1.01,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
		>
			<div className="w-10 md:w-20 lg:w-32 xl:w-1/2">
	 
                <svg
					viewBox="0 0 256 209"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					preserveAspectRatio="xMidYMid"
				>
                    <g>
  
                        <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"
                        className="fill-current text-white dark:text-gray-900">

                        </path>
                     
                    </g>
                </svg>
			</div>
			<ArrowCircleUpIcon className="absolute stroke-white dark:stroke-gray-900 bottom-0 right-0 m-2 md:m-5 md:mb-5 xl:m-5 rotate-45 mb-2 mr-2 w-8 h-8 lg:w-14 lg:h-14 md:w-10 md:h-10" />
		</motion.a>
	)
}

export default TwitterCard
