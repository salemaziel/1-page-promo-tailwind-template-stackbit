import React from "react"
//import ProfilePic from '../../images/profilepic-500x500.jpg';


const ProfileImg = ({data}) => (
    <>
                  <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                    <div className="relative">
                      <img
                        alt="..."
                        src={data.siteDataYaml.profile_image}
                        className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16"
                        style={{ maxWidth: '150px' }}
                      />
                    </div>
                  </div>

    </>
)

export default ProfileImg