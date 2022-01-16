import React from 'react'
import pagepreview from '../assets/images/pagepreview.png';
import gridlines from '../assets/images/gridlines-bg.svg'

export default function Home () {
    return (
        <main className="
          mt-10
          mx-auto
          max-w-7xl
          px-4
          sm:mt-12
          sm:px-6
          md:mt-16
          lg:mt-20
          lg:px-8
          xl:mt-28"
        >
          <img
            src={gridlines}
            className="
              absolute
              top-0
              left-0
              right-0 w-full
              -z-10
            "
          ></img>
            <div className="text-center">
              <h1 className="
                text-4xl
                tracking-tight
                font-extrabold
                text-gray-900
                lg:mx-52
                sm:text-5xl
                md:text-6xl"
              >
                <span className="
                  block
                  xl:inline
                  text-white"
                >Showcase your</span>{' '}
                <span className="
                  block
                  text-indigo-600
                  xl:inline"
                >gaming identity</span>{' '}
                <span className="
                  block
                  xl:inline
                  text-white"
                >with</span>{' '}
                <span className="
                  block
                  bg-gradient-to-r
                  text-transparent
                  bg-clip-text
                  from-cyan-500
                  to-blue-500
                  xl:inline"
                >one link.</span>
              </h1>
              <p className="
                mt-7
                text-base
                max-w-xl
                mx-16
                text-white
                md:mx-auto
                lg:mx-auto
                lg:mt-3"
              >
                Launch your own gaming page in seconds, link all of your games, share your own epic game highlights, game achievements, and more - all in one place, and share it all over the internet.
              </p>
              <div className="
                mt-10
                sm:mt-8
                sm:flex
                sm:justify-center
                lg:justify-center
                lg:mt-[+80px]"
              >
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      px-8
                      py-3
                      border
                      border-transparent
                      text-base
                      font-medium
                      rounded-full
                      text-white
                      bg-indigo-600
                      hover:bg-indigo-700
                      md:py-4
                      md:text-lg
                      md:px-10
                      lg:px-5
                      lg:py-3"
                  >
                    Reserve your username
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-[+200px] space-x-8 lg:flex-row">
              <img className="w-auto
              " src={pagepreview}></img>
              <div className="mt-6 text-white">
                <h1 className="text-5xl font-extrabold">wdym?</h1>
                <p className="mt-4 text-lg">
                  GGWP lets you create your own page as a gamer. Instead of learning how to code like a hacker, you can launch your own gaming page in seconds with GGWP. Choose your own username, gamertag, add your games, and customize your page whatever you want. Showcase everything you love to play, the current game you're playing and let other people join and play with you, and share your{' '}
                  <a
                    href="https://ggwp.link/"
                    className="underline"
                  >https://ggwp.link/</a>{' '}
                  with your friends or the whole world.
                </p>
              </div>
            </div>

            <div className="
              mt-32
              bg-[#1a1a1a]
              rounded-xl"
            >
              <div className="
                max-w-7xl
                mx-auto
                py-12
                px-4
                sm:px-6
                lg:py-16
                lg:px-8
                lg:flex
                lg:items-center
                lg:justify-between"
              >
                <h2 className="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  sm:text-4xl"
                >
                  <span className="block text-white">Want to create your awesome page?</span>
                  <span className="block text-indigo-600">Reserve your username today!</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        px-5 py-3 border
                        border-transparent
                        text-base
                        font-medium
                        rounded-md
                        text-white
                        bg-indigo-600
                        hover:bg-indigo-700"
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
