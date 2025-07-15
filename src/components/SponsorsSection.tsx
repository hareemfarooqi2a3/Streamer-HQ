"use client";

interface SponsorsSectionProps {
    onPartnerClick?: () => void;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ onPartnerClick }) => {
    const sponsors = Array(5).fill(null); // Placeholder for 5 sponsors

    return (
        <section id="sponsors" className="py-16 px-6 bg-secondary/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Proudly Partnered With</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">These amazing brands help make the stream possible. Click to visit their sites!</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
                    {sponsors.map((_, index) => (
                        <a key={index} href="#" className="bg-white rounded-lg flex items-center justify-center h-24 hover:bg-gray-100 transition">
                            <img src="streamer-logo.avif" alt="Sponsor Logo" className="max-h-24" />
                        </a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        id="partner-btn"
                        className="bg-transparent hover:bg-accent text-accent hover:text-black border-2 border-accent px-8 py-3 rounded-lg font-bold transition"
                        onClick={onPartnerClick}
                    >
                        Interested in Partnering?
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;