import React from 'react'
import pagepreview from '../assets/images/pagepreview.png';

export default function Home () {
    return (
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-white">Establish your</span>{' '}
                <span className="block text-indigo-600 xl:inline">gaming brand.</span>
              </h1>
              <p className="mt-3 text-base max-w-xl mx-auto text-white sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-auto">
                UnLevel allows you to establish your gaming identity to the world. Share epic game highlights, game links, and game achievements - all in one place.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center lg:mt-[+80px]">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 lg:px-5 lg:py-3"
                  >
                    Reserve your username
                  </a>
                </div>
              </div>
            </div>

            <div className="flex mt-[+200px] space-x-8">
              <img src={pagepreview}></img>
              <div className="mt-6 text-white">
                <h1 className="text-5xl font-extrabold">wdym?</h1>
                <p className="mt-4 text-lg">
                  UnLevel lets you create your personal brand as a gamer. Instead of learning how to code like a hacker to create a website for your gaming blah blah, you can publish your own Gaming Profile and let the world see what you play and see your gaming links/accounts, they can also join to your currently playing game (Of course, that’s soon).
                </p>
              </div>
            </div>

            <div className="mt-32 bg-[#1a1a1a] rounded-xl">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  <span className="block text-white">Want to create your awesome page?</span>
                  <span className="block text-indigo-600">Reserve your username today!</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Reserve username
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
    )
}
