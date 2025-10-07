import { Search } from "feather-icons-react";
import React from "react";

const LoginSearch = () => {
    return (
        <>
            <div className="cursor-pointer">
                <Search />
            </div>

            {/* Mobile User Icon */}
            <div className='cursor-pointer relative rounded-full text-white px-3 py-1 bg-blue-600 user-menu '>
                Login
            </div>
        </>
    );
};

export default LoginSearch;
