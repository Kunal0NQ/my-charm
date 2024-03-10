import React from "react";
import { SiPkgsrc } from "react-icons/si";
export const Header = () => {
  return (
    <header class="text-gray-600 body-font mt-6">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center hover:bg-zinc-200 rounded-full">
        <Link href='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <SiPkgsrc class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
          <span class="ml-3 text-xl">PKGS</span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href='/' class="mr-5 hover:text-gray-900">Home</Link>
          <Link href='/' class="mr-5 hover:text-gray-900">Products</Link>
          <Link href='/' class="mr-5 hover:text-gray-900">About</Link>
          <Link href='/' class="mr-5 hover:text-gray-900">Contact </Link>
        </nav>
        {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          ignup
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
};
