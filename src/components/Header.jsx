import React from 'react'
import { Routes,Route, Switch, NavLink, Link } from 'react-router-dom';

const Header = () => {
    let admin=true;
    
  return (
    <div>
        <header class="text-gray-600 body-font border-y-2">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>

      <span class="ml-3 text-xl">Devthon</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" class="mr-5 hover:text-gray-900 hover:cursor-pointer">Home</Link>
      <Link to="/About" class="mr-5 hover:text-gray-900 hover:cursor-pointer">About</Link>
      <Link to="/Login" class="mr-5 hover:text-gray-900 hover:cursor-pointer">Login</Link>
     
    </nav>
    <button class={`inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ${(admin) ? "bg-blue-300" :"hidden" }`}>post
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Header