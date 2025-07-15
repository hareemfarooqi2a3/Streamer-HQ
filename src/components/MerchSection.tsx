const MerchSection = () => {
    return (
        <section id="merch" className="py-16 px-6 bg-secondary/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The Armory <span className="text-primary">//</span> Official Merch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Level up your wardrobe with exclusive, limited-edition gear from the stream. New drops monthly!</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Merch Item 1 */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg stream-card">
                        <div className="relative">
                            <img src="/hoodie.jpg" alt="Merch Item" className="w-full h-64 object-cover" />
                            <div className="absolute top-2 right-2 bg-primary px-2 py-1 rounded text-xs font-bold">NEW</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Signature Hoodie</h3>
                            <p className="text-gray-400 mb-4">Premium quality hoodie with embroidered logo and twitch QR code</p>
                            <div className="flex justify-between items-center">
                                <span className="text-accent font-bold text-xl">$49.99</span>
                                <button className="bg-primary hover:bg-purple-700 px-4 py-2 rounded font-medium transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Merch Item 2 */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg stream-card">
                        <div className="relative">
                            <img src="/hoodie2.jpg" alt="Merch Item" className="w-full h-64 object-cover" />
                            <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-xs font-bold">BESTSELLER</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Emote Snapback</h3>
                            <p className="text-gray-400 mb-4">Adjustable cap featuring your favorite stream emotes</p>
                            <div className="flex justify-between items-center">
                                <span className="text-accent font-bold text-xl">$29.99</span>
                                <button className="bg-primary hover:bg-purple-700 px-4 py-2 rounded font-medium transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Merch Item 3 */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg stream-card">
                        <img src="/hoodie3.jpg" alt="Merch Item" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Streamer Mug Bundle</h3>
                            <p className="text-gray-400 mb-4">Ceramic mug with heat-sensitive design and exclusive sticker pack</p>
                            <div className="flex justify-between items-center">
                                <span className="text-accent font-bold text-xl">$34.99</span>
                                <button className="bg-primary hover:bg-purple-700 px-4 py-2 rounded font-medium transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-transparent hover:bg-primary border-2 border-primary px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105">
                        View Full Collection
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MerchSection;