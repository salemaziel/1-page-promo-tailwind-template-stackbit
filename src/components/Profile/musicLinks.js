import React from 'react';

function MusicLinkBtns({data}) {
	return (
		<>
{/*			{props.items.map((item, index) => ( */}
                {data.siteDataYaml.feat_music_link ? 
				<a
					href="#"
					className="relative rounded-lg p-0.5 overflow-hidden bg-transparent shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
				>
					<div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-black rounded-lg">
						<div className="flex-shrink-0 mr-4">
							<img
								className="w-16 h-16 rounded-full"
								src={data.siteDataYaml.profile_image}
								alt=""
							/>
						</div>
						<div className="flex-1 min-w-0">
							<a href="#_" className="focus:outline-none">
								<p className="text-lg font-medium text-gray-100">
									{data.siteDataYaml.feat_music_link_title}
								</p>
								<p className="text-sm text-gray-400 truncate">
                                {data.siteDataYaml.feat_music_link_subtitle}
								</p>
							</a>
						</div>
						<div className="flex-1 flex-grow-0 pr-2 text-gray-200">
							<div className="relative flex items-center justify-end space-x-3">
								<a
									href="#_"
									className="text-gray-300 hover:text-gray-200"
								>
									<FaSpotify className="w-5 h-5 fill-current" />
								</a>
								<a
									href="#_"
									className="text-gray-300 hover:text-gray-200"
								>
									<FaSoundcloud className="w-5 h-5 fill-current" />
								</a>
							</div>
						</div>
					</div>
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 via-purple-400 to-pink-500" />
				</a>
                : null }




	{/*		))}  */}
		</>
	);
}

export default MusicLinkBtns;
