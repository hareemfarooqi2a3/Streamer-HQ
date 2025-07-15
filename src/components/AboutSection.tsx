const AboutSection = () => {
    return (
        <section id="about" className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img src="/StreamerProfile.png" alt="Streamer Profile" className="rounded-xl shadow-xl w-full max-w-md mx-auto" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-primary">StreamerName</span></h2>
                        <div className="space-y-4 text-gray-300">
                            <p>Hey there! I'm StreamerName, a competitive gamer turned full-time content creator specializing in FPS games with a side of absurd challenges.</p>
                            <p>What started as a hobby in 2018 has grown into an amazing community of over 200K followers across platforms. My stream is all about high-energy gameplay, viewer interaction, and proving that you can have fun while being competitive.</p>
                            <p>Beyond streaming, I'm passionate about helping new creators learn the ropes and collaborating with brands to bring unique experiences to my audience.</p>
                            <div className="pt-4">
                                <h3 className="font-bold text-lg mb-2">Quick Stats:</h3>
                                <ul className="grid grid-cols-2 gap-2">
                                    <li className="flex items-center"><i className="fas fa-calendar-alt text-primary mr-2"></i> Streaming since 2018</li>
                                    <li className="flex items-center"><i className="fas fa-users text-primary mr-2"></i> 50K+ Discord Members</li>
                                    <li className="flex items-center"><i className="fas fa-trophy text-primary mr-2"></i> 3x Tournament Champion</li>
                                    <li className="flex items-center"><i className="fas fa-heart text-primary mr-2"></i> 10K+ Subs Lifetime</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;