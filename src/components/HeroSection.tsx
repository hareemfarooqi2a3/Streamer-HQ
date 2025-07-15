import Link from 'next/link';
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStore } from '@fortawesome/free-solid-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
    return (
        <header className="relative pt-16 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div id="live-banner" className="flex items-center justify-center mb-8 bg-gradient-to-r from-red-500 to-red-700 rounded-lg p-3 max-w-md mx-auto animate-bounce">
                    <div className="live-badge h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="font-bold uppercase tracking-wider">Live Now: Warzone Wipedown</span>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Welcome to <span className="block">Pixaboy's</span> HQ
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
                            Your one-stop hub for all things StreamerName - content, merch, community, and more. Join the empire and level up your fandom!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-primary hover:bg-purple-700 px-6 py-3 rounded-lg font-bold flex items-center justify-center transition">
                            <FontAwesomeIcon icon={faPlay} className="mr-2" /> Watch Live
                            </button>
                             <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-bold flex items-center justify-center transition border border-gray-700">
                            <FontAwesomeIcon icon={faStore} className="mr-2" /> Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="relative bg-black rounded-lg overflow-hidden shadow-xl stream-card">
                            {/* Replaced Twitch Embed Placeholder with Image */}
                            <div className="aspect-w-16 aspect-h-9 w-full">
                                {/* The image will now fill this aspect ratio container */}
                                <img
                                    src="/VideoThumbnail.jpg" // Path to your image in the public folder
                                    alt="Live Stream Thumbnail"
                                    className="w-full h-full object-cover" // Ensures the image covers the area, maintaining aspect ratio
                                />
                                {/* Optional: Add a play overlay if you want it to look clickable */}
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                                     <FontAwesomeIcon icon={faPlay} className="text-6xl text-primary" />
                                </div>
                            </div>
                            <div className="p-4 bg-secondary">
                                <div className="flex items-center">
                                    <img src="/StreamPreview.jpg" alt="Stream Preview" className="w-12 h-12 rounded-full mr-3" />
                                    <div>
                                        <h3 className="font-bold">Playing: Call of Duty: Warzone</h3>
                                        <p className="text-sm text-gray-400">24K viewers | Started 1 hour ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;