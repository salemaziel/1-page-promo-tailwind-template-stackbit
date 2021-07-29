import React from "react"

import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa';


const SocialMobile = ({data}) => (
    <>
                    <div className="block w-full px-4 md:hidden lg:w-4/12 lg:order-1">
                  <div className="flex justify-center py-4">
                    <div className="p-3 mr-4 text-center">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteYaml.facebook_link}
                          title="El Monk on Facebook"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-blue-600"
                        >
                          <FaFacebook size="2rem" />
                        </a>
                      </span>
                    </div>
                    <div className="p-3 mr-4 text-center">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteYaml.instagram_link}
                          title="El Monk on Instagram"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-red-700"
                        >
                          <FaInstagram size="2rem" />
                        </a>
                      </span>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                        <a
                          href={data.siteYaml.twitter_link}
                          title="El Monk on Twitter"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-blue-700"
                        >
                          <FaTwitter size="2rem" />
                        </a>
                      </span>
                    </div>
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