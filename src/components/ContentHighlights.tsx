const ContentHighlights = () => {
    const videos = [
        { title: "30 Kill Streak in Warzone!", time: "3 days ago", views: "45K views" },
        { title: "Reacting to My WORST Plays", time: "1 week ago", views: "112K views" },
        { title: "Subscriber Challenge Madness", time: "2 weeks ago", views: "78K views" },
        { title: "New Setup Reveal 2023", time: "3 weeks ago", views: "210K views" },
    ];

    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Content <span className="text-primary">//</span> Can't Miss Moments</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden stream-card">
                            <div className="relative">
                                <img src="/VideoThumbnail3.jpg" alt="Video Thumbnail" className="w-full" />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                                    <i className="fas fa-play text-4xl text-primary"></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold mb-2">{video.title}</h3>
                                <p className="text-gray-400 text-sm">{video.time} • {video.views}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentHighlights;