import React from 'react';

import ProfileImg from './ProfileImg';

//import ViaDelWeb from '../../images/Via-Del-Web_MAIN-LOGO-horizontal.png';


import SocialDesktop from './socialDesktop';
import SocialMobile from './socialMobile';

import { FaMapMarkerAlt } from 'react-icons/fa';


const S2SocialBio = ({data}) => (
  <>
    <div className="flex flex-wrap justify-center mb-32 md:mb-10">
      <ProfileImg data={data}/>

      <SocialDesktop data={data}/>
    </div>
    <div className="mt-12 text-center">
      <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800 font-ubuntu">
        {data.siteYaml.user_name}
      </h3>
      <div className="my-2 text-sm font-bold leading-normal text-gray-500 uppercase font-ubuntu">
        <div className="flex flex-row justify-center text-center">
          <FaMapMarkerAlt size="1rem" className="mr-2" />{' '}
          <span className="">{data.siteYaml.home_town}</span>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-8 mb-2 lg:w-3/5">
       {/* <div className="justify-center w-3/4 mx-auto md:w-1/4">
          <a href="https://viadelweb.com" rel="follow" title="Link to Via Del Web website">
            <img src={ViaDelWeb} alt="Via Del Web Logo" className="w-full" />
          </a>
</div> */}
        <h2 className="text-lg font-bold text-gray-700 font-ubuntu">
        {data.siteYaml.about_you}
        </h2>
      </div>
    </div>

    <SocialMobile data={data} />
  </>
);

export default S2SocialBio;
