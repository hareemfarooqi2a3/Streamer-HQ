"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitch, faDiscord } from '@fortawesome/free-brands-svg-icons';

interface NavbarProps {
    onDiscordClick?: () => void; // Added prop
}

const Navbar: React.FC<NavbarProps> = ({ onDiscordClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-secondary py-4 px-6 sticky top-0 z-50 border-b border-purple-900">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                       <FontAwesomeIcon icon={faTwitch} className="text-primary text-3xl" />
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">StreamHQ</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-primary font-medium">Home</Link>
                    <Link href="/#merch" className="hover:text-primary font-medium">The Armory</Link>
                    <Link href="/#schedule" className="hover:text-primary font-medium">Schedule</Link>
                    <Link href="/#about" className="hover:text-primary font-medium">About</Link>
                    <Link href="/#sponsors" className="hover:text-primary font-medium">Partners</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        id="discord-btn"
                        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium flex items-center transition"
                        onClick={onDiscordClick} // Added onClick handler
                    >
                         <FontAwesomeIcon icon={faDiscord} className="mr-2" /> <span className="hidden sm:inline">Join Discord</span>
                    </button>
                    <button className="md:hidden" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faBars} className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-secondary py-4 px-4 border-t border-purple-900">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="hover:text-primary font-medium" onClick={toggleMobileMenu}>Home</Link>
                        <Link href="/#merch" className="hover:text-primary font-medium" onClick={toggleMobileMenu}>The Armory</Link>
                        <Link href="/#schedule" className="hover:text-primary font-medium" onClick={toggleMobileMenu}>Schedule</Link>
                        <Link href="/#about" className="hover:text-primary font-medium" onClick={toggleMobileMenu}>About</Link>
                        <Link href="/#sponsors" className="hover:text-primary font-medium" onClick={toggleMobileMenu}>Partners</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;