"use client";
import { useState } from "react";
import MobileView from "./MobileView";
import Overlay from "./Overlay";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Animation from "./Animation";

export default function CompactNavbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile drawer
    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
            <nav className='relative z-50 flex justify-between items-center h-12'>
                {/* Left Section */}
                <LeftSection />

                {/* Right Section */}
                <RightSection toggleNavbar={toggleNavbar} isOpen={isOpen} />
            </nav>

            {/* Overlay */}
            <Overlay toggleNavbar={toggleNavbar} isOpen={isOpen} />

            {/* Mobile Drawer */}
            <MobileView toggleNavbar={toggleNavbar} isOpen={isOpen} />
            {/* Animations */}
            <Animation />
        </div>
    );
}
