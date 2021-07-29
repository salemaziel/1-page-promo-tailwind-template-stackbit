import React from 'react';

import Monk from '../../images/monk.jpeg';

import { FaSpotify, FaSoundcloud } from 'react-icons/fa';

import Fade from "react-reveal"

const S3Body = () => (
  <>
    <div className="py-2 mt-2 text-center border-t border-gray-300 sm:mt-10 sm:py-10">
      <div className="justify-center w-full px-4">


        <div>


          {/* Section 1 */}
          <section className="py-5 pb-20 bg-white">
            <div className="relative max-w-6xl px-2 mx-auto md:px-6 lg:px-10">
              
              <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 xl:grid-cols-2">
              <Fade top cascade>
                {/* Member 1 */}

                <div className="relative rounded-lg p-0.5 overflow-hidden bg-transparent shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-black rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <img className="w-16 h-16 rounded-full" src={Monk} alt=""/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#_" className="focus:outline-none">
                        <p className="text-lg font-medium text-gray-100">Link</p>
                        <p className="text-sm text-gray-400 truncate">url</p>
                      </a>
                    </div>
                    <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
                      <div className="relative flex items-center justify-end space-x-3">
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSpotify className="w-5 h-5 fill-current" />
                        </a>
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSoundcloud className="w-5 h-5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 via-purple-400 to-pink-500" />
                </div>
                {/* Member 2 */}
                <div className="relative rounded-lg p-0.5 overflow-hidden bg-transparent shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-black rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <img className="w-16 h-16 rounded-full" src={Monk} alt=""/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#_" className="focus:outline-none">
                        <p className="text-lg font-medium text-gray-100">Link</p>
                        <p className="text-sm text-gray-400 truncate">url</p>
                      </a>
                    </div>
                    <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
                      <div className="relative flex items-center justify-end space-x-3">
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSpotify className="w-5 h-5 fill-current" />
                        </a>
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSoundcloud className="w-5 h-5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-400" />
                </div>
                {/* Member 3 */}
                <div className="relative rounded-lg p-0.5 overflow-hidden bg-transparent shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-black rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <img className="w-16 h-16 rounded-full" src={Monk} alt=""/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#_" className="focus:outline-none">
                        <p className="text-lg font-medium text-gray-100">Link</p>
                        <p className="text-sm text-gray-400 truncate">url</p>
                      </a>
                    </div>
                    <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
                      <div className="relative flex items-center justify-end space-x-3">
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSpotify className="w-5 h-5 fill-current" />
                        </a>
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSoundcloud className="w-5 h-5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400" />
                </div>
                {/* Member 4 */}
                <div className="relative rounded-lg p-0.5 overflow-hidden bg-transparent shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-black rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <img className="w-16 h-16 rounded-full" src={Monk} alt=""/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#_" className="focus:outline-none">
                        <p className="text-lg font-medium text-gray-100">Link</p>
                        <p className="text-sm text-gray-400 truncate">url</p>
                      </a>
                    </div>
                    <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
                      <div className="relative flex items-center justify-end space-x-3">
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSpotify className="w-5 h-5 fill-current" />
                        </a>
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSoundcloud className="w-5 h-5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 via-purple-400 to-pink-500" />
                </div>
                {/* Member 5 */}
                <div className="relative rounded-lg p-0.5 overflow-hidden bg-transparent shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-black rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <img className="w-16 h-16 rounded-full" src={Monk} alt=""/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#_" className="focus:outline-none">
                        <p className="text-lg font-medium text-gray-100">Link</p>
                        <p className="text-sm text-gray-400 truncate">url</p>
                      </a>
                    </div>
                    <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
                      <div className="relative flex items-center justify-end space-x-3">
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSpotify className="w-5 h-5 fill-current" />
                        </a>
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSoundcloud className="w-5 h-5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-400" />
                </div>
                {/* Member 6 */}
                <div className="relative rounded-lg p-0.5 overflow-hidden bg-transparent shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="relative z-10 flex items-center w-full h-full px-6 py-5 bg-black rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <img className="w-16 h-16 rounded-full" src={Monk} alt=""/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#_" className="focus:outline-none">
                        <p className="text-lg font-medium text-gray-100">Link</p>
                        <p className="text-sm text-gray-400 truncate">url</p>
                      </a>
                    </div>
                    <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
                      <div className="relative flex items-center justify-end space-x-3">
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSpotify className="w-5 h-5 fill-current" />
                        </a>
                        <a href="#_" className="text-gray-300 hover:text-gray-200">
                          <FaSoundcloud className="w-5 h-5 fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400" />
                </div>
                </Fade>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default S3Body;
