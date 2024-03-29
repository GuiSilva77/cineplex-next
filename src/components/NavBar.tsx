import { Navbar } from "flowbite-react";
import Image from "next/image";
import styles from "NavBar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav className="dark fixed top-0 w-full z-50 bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <img src="logo.svg" className="h-6 mr-3 sm:h-9" alt="Cineplex Logo" />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-1 border border-transparent bg-transparent rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link
                  href="/programacao"
                  className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-4 hover:bg-gray-600 hover:bg-opacity-50 transition"
                  aria-current="page"
                >
                  Programação
                </Link>
              </li>
              <li>
                <Link
                  href="#embreve"
                  className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-4 hover:bg-gray-600 hover:bg-opacity-50 transition"
                  aria-current="page"
                >
                  Em Breve
                </Link>
              </li>
              <li>
                <Link
                  href="/sobrenos"
                  className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-4 hover:bg-gray-600 hover:bg-opacity-50 transition"
                  aria-current="page"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
