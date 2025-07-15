import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-secondary py-12 px-6 border-t border-purple-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <i className="fab fa-twitch text-primary text-2xl mr-2"></i> StreamHQ
                        </h3>
                        <p className="text-gray-400">The ultimate creator hub for Twitch streamers. Level up your brand today.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-primary transition">Home</Link></li>
                            <li><Link href="/#merch" className="text-gray-400 hover:text-primary transition">The Armory</Link></li>
                            <li><Link href="/#schedule" className="text-gray-400 hover:text-primary transition">Schedule</Link></li>
                            <li><Link href="/#about" className="text-gray-400 hover:text-primary transition">About</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition">FAQ</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition">PC Specs</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition">Stream Setup</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition">Commands</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition">Terms of Service</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition">Cookie Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition">DMCA</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 mb-4 md:mb-0">© 2023 StreamerName. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i className="fab fa-discord"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;