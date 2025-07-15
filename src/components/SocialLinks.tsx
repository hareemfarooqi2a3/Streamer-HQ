import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter, faInstagram, faYoutube, faTiktok, faDiscord, faRedditAlien
} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Connect With Me Everywhere</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <a href="https://www.x.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon bg-twitter hover:bg-blue-600">
                        <FontAwesomeIcon icon={faTwitter} /> {/* Replaced <i> with FontAwesomeIcon */}
                    </a>
                    <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon bg-instagram hover:bg-pink-600">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="social-icon bg-youtube hover:bg-red-600">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon bg-tiktok hover:bg-black">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="social-icon bg-discord hover:bg-indigo-700">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <a href="https://www.reddit.com/r/yoursubreddit" target="_blank" rel="noopener noreferrer" className="social-icon bg-reddit hover:bg-orange-600">
                        <FontAwesomeIcon icon={faRedditAlien} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialLinks;