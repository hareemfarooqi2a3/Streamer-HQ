import Link from 'next/link';

const ScheduleSection = () => {
    const scheduleItems = [
        { day: "Mon", title: "Warzone Wipeout Wednesdays", time: "8:00 PM - 12:00 AM", bgColor: "bg-primary" },
        { day: "Wed", title: "Subscriber Saturdays", time: "6:00 PM - 10:00 PM", bgColor: "bg-primary/60" },
        { day: "Fri", title: "Friday Night Fiesta", time: "9:00 PM - 1:00 AM", bgColor: "bg-primary/30" },
        { day: "Sun", title: "Special Events & Collabs", time: "Varies - See Twitter for updates", bgColor: "bg-accent/60" },
    ];

    return (
        <section id="schedule" className="py-16 px-6 bg-secondary/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Stream Schedule</h2>
                    <p className="text-gray-400">Timezone: <span className="text-primary">EST (Eastern Standard Time)</span></p>
                </div>

                <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg">
                    {scheduleItems.map((item, index) => (
                        <div key={index} className={`pb-4 ${index < scheduleItems.length - 1 ? 'border-b border-gray-700 mb-4' : 'pb-2'}`}>
                            <div className="flex items-center">
                                <div className={`${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <span className="font-bold text-lg">{item.day}</span>
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-gray-400">{item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-400">Schedule subject to change. Follow <Link href="#" className="text-primary hover:underline">Twitter</Link> for updates.</p>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;