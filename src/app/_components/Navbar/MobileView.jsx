import { ShoppingCart, XCircle } from "feather-icons-react";
import MainDeskTopLink from "./MainDeskTopLink";

const MobileView = ({isOpen, toggleNavbar}) => {
    return (
        <>
            <div
                className={`fixed top-0 right-0 h-full w-4/5 sm:w-1/2 z-50 transform transition-all duration-700 ${
                    isOpen
                        ? "translate-x-0 opacity-100 animate-slideInBounce"
                        : "translate-x-full opacity-0 pointer-events-none"
                }`}>
                <div className='h-full bg-white/40 rounded-bl-4xl rounded-tl-4xl backdrop-blur-lg backdrop-saturate-150 shadow-[0_0_25px_rgba(0,0,0,0.15)] border-l border-slate-200/20 p-4 flex flex-col space-y-4'>
                    <button
                        onClick={toggleNavbar}
                        className='self-end mb-10 text-slate-700 hover:text-slate-900'>
                        <XCircle className='h-6 w-6 cursor-pointer' />
                    </button>

                    {/* Top Row Icons */}
                    <div className='flex justify-evenly items-center'>
                        <input
                            type='text'
                            placeholder='Search..'
                            className='px-3 py-2 border rounded-2xl'
                        />
                        <ShoppingCart className='h-6 w-6 text-gray-700 hover:text-blue-500 cursor-pointer' />
                    </div>

                    {/* Pages Links */}
                    <div className='flex flex-col gap-2'>
                        <MainDeskTopLink />

                        <div className='relative rounded-full py-5 px-3 text-white cursor-pointer bg-blue-600 user-menu '>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileView;
