import React from "react"

import { FaFacebook, FaInstagram, FaTwitter, FaSnapchat, FaYoutube, FaYoutubeSquare, FaApple, FaSoundcloud, FaSpotify } from 'react-icons/fa';

import { SiTidal, SiTiktok } from "react-icons/si";


const SocialMobile = ({data}) => (
    <>
                    <div className="block w-full px-1 md:hidden lg:w-4/12 lg:order-1">
                  <div className="flex flex-wrap justify-center py-4">
                  {data.siteDataYaml.facebook_link ? <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.facebook_link}
                          title="El Monk on Facebook"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-blue-600"
                        >
                          <FaFacebook size="2rem" />
                        </a>
                      </span>
                    </div> : null }
                 {data.siteDataYaml.instagram_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.instagram_link}
                          title="El Monk on Instagram"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-red-700"
                        >
                          <FaInstagram size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

            {data.siteDataYaml.twitter_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.twitter_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-blue-700"
                        >
                          <FaTwitter size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

                {data.siteDataYaml.snapchat_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.snapchat_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-yellow-200"
                        >
                          <FaSnapchat size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

                    {data.siteDataYaml.youtube_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.youtube_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-red-600"
                        >
                          <FaYoutube size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

                    {data.siteDataYaml.youtube_music_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.youtube_music_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-red-600"
                        >
                          <FaYoutubeSquare size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

              {data.siteDataYaml.apple_music_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.apple_music_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-black"
                        >
                          <FaApple size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

              {data.siteDataYaml.soundcloud_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.soundcloud_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-yellow-500"
                        >
                          <FaSoundcloud size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

{data.siteDataYaml.tiktok_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.tiktok_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-black"
                        >
                          <SiTiktok size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

                {data.siteDataYaml.spotify_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.spotify_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-green-500"
                        >
                          <FaSpotify size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

{data.siteDataYaml.tidal_link ?
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteDataYaml.tidal_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-black"
                        >
                          <SiTidal size="2rem" />
                        </a>
                      </span>
                    </div>
                    : null }

                  </div>
                </div>

                <div className="block w-full px-4 md:hidden lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                  <div className="flex justify-center px-3 py-4 sm:mt-0 md:block">
                    <a
                      className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase bg-black rounded shadow outline-none hover:bg-gray-700 hover:text-white focus:outline-none sm:mr-2"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      href="#mailgo"
                      data-address="salem"
                      data-domain="viadelweb.com"
                      data-subject="Hey, let's connect!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact for Bookings
                    </a>
                  </div>
                </div>

    </>
)

export default SocialMobile