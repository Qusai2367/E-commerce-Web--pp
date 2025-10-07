import LoginSearch from "./LoginSearch";
import BtnControle from "./BtnControle";

const RightSection = ({toggleNavbar, isOpen}) => {
    return (
        <>
        <div className='flex items-center gap-x-2'>
                {/* Desktop Secondary Icons + User */}
                <div className='hidden md:flex items-center gap-2 relative '>
                    <LoginSearch />
                </div>

                {/* Mobile Menu Button + User */}
                <div className='-mr-1 md:hidden flex flex-row items-center gap-5'>
                    <LoginSearch />

                    {/* Mobile Menu Button */}
                    <BtnControle toggleNavbar={toggleNavbar} isOpen={isOpen} />
                </div>
            </div>
            
        </>
    );
};

export default RightSection;
