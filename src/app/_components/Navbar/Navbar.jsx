"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, XCircle } from "feather-icons-react";
import { pages, SecndaryPage } from "@/app/constant/constant";
import { ShoppingCart, Heart, User } from "feather-icons-react";

export default function CompactNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <header className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
      <nav className='relative z-50 flex justify-between items-center h-12'>
        {/* Left Section */}
        <div className='flex items-center gap-x-4 md:gap-x-8'>
          <Link aria-label='Home' href='/'>
            <svg aria-hidden='true' viewBox='0 0 109 40' className='h-7 w-auto'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z'
                fill='#2563EB'
              />
            </svg>
          </Link>

          {/* Desktop Links */}
          <div className='hidden md:flex md:gap-x-4'>
            {pages.map((page) => (
              <Link key={page.id} href={page.route} className="px-3 hover:bg-blue-500 hover:text-white py-3 rounded-2xl active:text-blue-500 active font-bold hover:font-black">
                {page.pages}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-x-2'>
          {/* Desktop Only Input */}
          <input
            type='text'
            placeholder='search'
            className='hidden md:block border border-gray-300 rounded px-2 py-1 text-sm'
          />

          {/* Desktop Secondary Icons */}
          <div className='hidden md:flex items-center gap-2'>
            {SecndaryPage.map((page) => (
              <div key={page.id} className='hover:text-blue-500'>
                {page.icon}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='-mr-1 md:hidden'>
            <button
              onClick={toggleNavbar}
              className='relative z-50 flex h-8 w-8 items-center justify-center focus:outline-none'
              aria-label='Toggle Navigation'
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XCircle className='h-6 w-6 text-slate-700' />
              ) : (
                <Menu className='h-6 w-6 text-slate-700' />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeNavbar}
        className={`fixed  inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 sm:w-1/2 z-50 transform transition-all duration-700 ${
          isOpen
            ? "translate-x-0 opacity-100 animate-slideInBounce"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className='h-full bg-white/40 rounded-bl-4xl rounded-tl-4xl backdrop-blur-lg backdrop-saturate-150 shadow-[0_0_25px_rgba(0,0,0,0.15)] border-l border-slate-200/20 p-4 flex flex-col space-y-4'>
          <button
            onClick={closeNavbar}
            className='self-end mb-10 text-slate-700 hover:text-slate-900 '
            aria-label='Close Navigation'
          >
            <XCircle className='h-6 w-6' />
          </button>

          {/* Top Row Icons (Mobile) */}
          <div className='flex justify-around'>
            <User className='h-6 w-6 text-gray-700 hover:text-blue-500' />
            <ShoppingCart className='h-6 w-6 text-gray-700 hover:text-blue-500' />
            <Heart className='h-6 w-6 text-gray-700 hover:text-red-500' />
          </div>

          {/* Mobile Input */}
          <input
            type='text'
            placeholder='search'
            className=' bg-blue-500 rounded p-4 text-sm my-5'
          />

          {/* Pages Links */}
          <div className='flex flex-col gap-2 '>
            {pages.map((page) => (
              <Link
                key={page.id}
                className='mobile-link hover:bg-blue-500 hover:text-white py-5 px-3 rounded-2xl active:bg-blue-500'
                onClick={closeNavbar}
                href={page.route}
              >
                {page.pages}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes slideInBounce {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          70% {
            transform: translateX(-10%);
            opacity: 1;
          }
          90% {
            transform: translateX(3%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slideInBounce {
          animation: slideInBounce 0.6s cubic-bezier(0.25, 1.25, 0.5, 1);
        }
      `}</style>
    </header>
  );
}

/* Tailwind Utilities */
const styles = `
.nav-link {
  @apply inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900;
}
.mobile-link {
  @apply block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100 rounded transition-colors duration-200;
}
`;
