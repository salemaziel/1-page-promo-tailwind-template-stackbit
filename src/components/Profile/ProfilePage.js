import React from 'react';
import { graphql, StaticQuery } from 'gatsby';


import S1BGHero from './s1BgHero';

import S3Body from './s3Body';
//import Fade from "react-reveal"


import S4Body from './s4Body';
import S5Body from './s5Body';

import S2SocialBio from './s2SocialBio';

const ProfilePage = ({data}) => (
    <>
      {/*<Navbar transparent />*/}
      <div className="profile-page bgBottom">
        <S1BGHero data={data} />
        <section className="static py-16 bg-black ">
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl animate-fade-in-fwd">
              <div className="px-4 md:px-6">
                <S2SocialBio data={data}/>
                <S3Body data={data} />
              </div>

                <S4Body data={data}/>

              <div className="px-4 md:px-6">
                <S5Body data={data}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
  let indexQuery = graphql`
  query {
    siteDataYaml {
      facebook_link
      apple_music_link
      background_photo
      instagram_link
      shop_link
      snapchat_link
      soundcloud_link
      spotify_link
      tiktok_link
      tidal_link
      youtube_link
      youtube_music_link
      profile_image
      user_name
      home_town
      about_you
      shop_link
      caption_photo
      caption_title
      caption_subtitle
      twitter_link
      gallery_pic
    }
  }
`;
export default  (props)=> (<StaticQuery query={indexQuery} render={data => (
  <ProfilePage data={data}  />
)}></StaticQuery>);