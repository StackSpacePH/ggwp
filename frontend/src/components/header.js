import logo from '../assets/images/logo.svg';
import logosingle from '../assets/images/logosingle.svg';
import { MenuIcon } from '@heroicons/react/outline'
import { Link, useLocation } from 'react-router-dom';
import { Popover } from '@headlessui/react'
import { useSelector } from 'react-redux';

export default function Header() {
  const currentRoute = useLocation().pathname;
  const state = useSelector((state) => state.page.value);

  return (
    <>
      {currentRoute.localeCompare("/") === 0 ? <HeaderDefault/> : <PageHeader state={state}/>}
    </>
  )
}

function HeaderDefault() {
  return (<Popover className="
    relative
    bg-transparent"
  >
      <div className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6"
      >
        <div className="
          flex
          justify-between
          items-center
          border-gray-100
          py-6
          md:justify-start
          md:space-x-10"
        >
          <div className="
            flex
            justify-start
            lg:w-0
            lg:flex-1"
          >
            <Link to='/'>
              <img
                className="h-8 w-40 sm:h-11"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="
            -mr-2
            -my-2
            md:hidden"
          >
            <Popover.Button className="
              bg-[#222222]
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500
              hover:bg-[#383838]"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="
            hidden
            md:flex
            items-center
            justify-end
            md:flex-1
            lg:w-0"
          >
              <div as="nav" className="
                hidden
                md:flex
                space-x-10"
              >
                <Link to="/" className="
                  text-base
                  font-medium
                  text-white
                  hover:text-gray-500"
                >
                    Home
                </Link>
                <Link to="/about" className="
                  text-base
                  font-medium
                  text-white
                  hover:text-gray-500"
                >
                    About
                </Link>
              </div>
            <a
              href="#"
              className="
                ml-8
                whitespace-nowrap
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                border
                border-stone-600
                rounded-md
                shadow-sm
                text-base
                font-medium
                text-white bg-transparent
                hover:bg-indigo-700
                hover:text-white
                hover:border-indigo-700"
            >
              Have an invitation code?
            </a>
          </div>
        </div>
      </div>
      

    </Popover>
  );
}

function PageHeader({ state }) {
  return (<Popover className="
    relative
    bg-transparent"
  >
      <div className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6"
      >
        <div className="
          flex
          justify-between
          items-center
          border-gray-100
          py-6
          md:justify-start
          md:space-x-10"
        >
          <div className="
            flex
            justify-start
            lg:w-0
            lg:flex-1"
          >
            <Link to='/'>
              <div className="
                flex
                justify-center
                items-center"
              >
                <img
                  className="h-8 w-auto sm:h-11"
                  src={logosingle}
                  alt=""
                />
                <span className="
                  ml-3
                  text-white
                  text-3xl
                  font-bold"
                >
                  {state.username}
                </span>
              </div>
            </Link>
          </div>

          <div className="
            md:flex
            items-center
            justify-end
            md:flex-1
            lg:w-0"
          >
            <a
              href="#"
              className="
                ml-8
                whitespace-nowrap
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                rounded-md
                shadow-sm
                text-base
                font-medium
                text-white
                bg-[#131313]
                hover:bg-indigo-700
                hover:text-white"
            >
              Create your page like this
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
}