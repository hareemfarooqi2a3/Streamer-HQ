const NewsletterSection = () => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-gray-900 rounded-xl p-8 shadow-xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Inner Circle</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Get exclusive content, early merch drops, and special perks delivered straight to your inbox.</p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="Your best email" className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <button type="submit" className="bg-primary hover:bg-purple-700 px-6 py-3 rounded-lg font-bold transition whitespace-nowrap">
                        Sign Me Up!
                    </button>
                </form>

                <p className="text-gray-500 text-sm mt-4">No spam, ever. Unsubscribe anytime.</p>
            </div>
        </section>
    );
};

export default NewsletterSection;