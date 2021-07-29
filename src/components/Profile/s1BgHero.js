import React from 'react'
//import BGPic from '../../images/wallhaven-45y613_m50.jpg';


const S1BGHero = ({data}) => (
    <>
        <section className="relative block bgPic">
          <div
            className="absolute top-0 w-full h-full h-screen bg-center bg-cover"
            style={{
              backgroundImage: `url(${data.siteYaml.background_photo})`
            }}
          >
            <span id="blackOverlay" className="absolute w-full h-full bg-black opacity-25"></span>
          </div>
          {/*<div
            className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
            style={{ height: '70px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>*/}
        </section>
    </>

)

export default S1BGHero