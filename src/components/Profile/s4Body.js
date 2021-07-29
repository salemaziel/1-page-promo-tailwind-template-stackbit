import React from 'react';

import LastNightVibes from "../../images/last-night-vibes.jpeg"


import Fade from 'react-reveal';

//import {  FaSpotify, FaSoundcloud,} from "react-icons/fa"

const S4Body = ({data}) => (
	<>
		{/* Section 1 */} ``
		<section className="flex flex-col w-full bg-black md:flex-row">
			<div className="flex flex-col items-center justify-center w-full px-6 py-10 md:w-1/2 lg:p-16 xl:p-24">
				<Fade bottom>
					<h2 className="max-w-lg text-4xl font-light leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl font-ubuntu">
						{data.siteYaml.caption_title}
					</h2>
					<p className="max-w-lg mt-5 text-xl text-left text-gray-500 md:text-base lg:text-xl font-ubuntu">
						{data.siteYaml.caption_subtitle}
					</p>
				</Fade>
			</div>
			<div className="w-full md:w-1/2">
				<Fade right>
					<img
						src={data.siteYaml.caption_photo}
						className="inset-0 object-cover"
						alt="Captioned Description"
					/>
				</Fade>
			</div>
		</section>
	</>
);

export default S4Body;
