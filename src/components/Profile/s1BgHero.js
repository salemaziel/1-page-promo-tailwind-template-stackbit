import React from 'react'
//import BGPic from '../../images/wallhaven-45y613_m50.jpg';


const S1BGHero = ({data}) => {
    return(
    <>
        <section className="relative block bgPic">
          <div
            className="absolute top-0 w-full h-full h-screen bg-center bg-cover"
            style={{
              backgroundImage: `url(${data.siteDataYaml.background_photo})`
            }}
          >
            <span id="blackOverlay" className="absolute w-full h-full bg-black opacity-25"></span>
          </div>
        </section>
    </>
);
};

export default S1BGHero