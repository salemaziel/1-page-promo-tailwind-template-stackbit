import React from 'react';

//import Pow from '../../images/el-monk-pow-ep.jpeg';

import Fade from 'react-reveal';


const S5Body = ({data}) => (
	<>
		<div className="py-4 mt-4 text-center border-t sm:mt-10 sm:py-10">
			<div className="justify-center w-full px-4`">
				<div>
					<section className="px-4 py-8">
						<div className="flex flex-wrap -mx-4 -mb-8">
							<Fade bottom cascade>
								<div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
									<img
										className="rounded shadow"
										src={data.siteYaml.gallery_pic}
										alt=""
									/>
								</div>
								<div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
									<img
										className="rounded shadow"
										src={data.siteYaml.gallery_pic}
										alt=""
									/>
								</div>
								<div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
									<img
										className="rounded shadow"
										src={data.siteYaml.gallery_pic}
										alt=""
									/>
								</div>
								<div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
									<img
										className="rounded shadow"
										src={data.siteYaml.gallery_pic}
										alt=""
									/>
								</div>
								<div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
									<img
										className="rounded shadow"
										src={data.siteYaml.gallery_pic}
										alt=""
									/>
								</div>
								<div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
									<img
										className="rounded shadow"
										src={data.siteYaml.gallery_pic}
										alt=""
									/>
								</div>
								<div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
									<img
										className="rounded shadow"
										src={data.siteYaml.gallery_pic}
										alt=""
									/>
								</div>
								<div className="w-1/2 px-2 mb-8 md:w-1/4 md:px-4">
									<img
										className="rounded shadow"
										src={data.siteYaml.gallery_pic}
										alt=""
									/>
								</div>
							</Fade>
						</div>
					</section>
				</div>
			</div>
		</div>
	</>
);

export default S5Body;
