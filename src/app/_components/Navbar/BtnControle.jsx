import { Menu, XCircle } from "feather-icons-react";


const BtnControle = ({toggleNavbar, isOpen}) => {
    return (
        <>
            <button
                onClick={toggleNavbar}
                className='relative z-50 flex h-8 w-8 items-center justify-center focus:outline-none'
                aria-label='Toggle Navigation'>
                {isOpen ? (
                    <XCircle className='h-6 w-6 text-slate-700 cursor-pointer' />
                ) : (
                    <Menu className='h-6 w-6 text-slate-700 cursor-pointer' />
                )}
            </button>
        </>
    );
};

export default BtnControle;
