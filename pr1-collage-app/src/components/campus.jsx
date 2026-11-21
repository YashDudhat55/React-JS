
export default function Campus() {
    const features = [
        {
            icon: "♧",
            title: "Vibrant Student Life",
            description: "Join clubs, events, and campus activities.",
            color: "text-[#102947]",
        },
        {
            icon: "◎",
            title: "Global Opportunities",
            description: "Study abroad and international exchange programs.",
            color: "text-[#102947]",
        },
        {
            icon: "🏆",
            title: "Athletics & Recreation",
            description: "Stay active and compete at the highest level.",
            color: "text-[#bd922f]",
        },
        {
            icon: "♧",
            title: "Support Services",
            description: "We're here to support you every step of the way.",
            color: "text-[#bd922f]",
        },
    ];

    return (
        <section id="campus" className="bg-white py-10">

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-6 lg:grid-cols-12">

                {/* Campus Image */}
                <div className="group relative h-64 overflow-hidden rounded-md shadow-sm lg:col-span-4">

                    <img
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
                        alt="Students enjoying campus life"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/35 transition-all duration-300 group-hover:bg-black/45" />

                    {/* Image Text */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 px-4 text-center text-white">

                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider">
                                Discover
                            </p>
                            <p className="text-xs font-medium uppercase tracking-widest">
                                Campus Life
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider">
                                Explore
                            </p>
                            <p className="text-xs font-medium uppercase tracking-widest">
                                Your Future
                            </p>
                        </div>

                    </div>
                </div>

                {/* Middle Content */}
                <div className="flex flex-col justify-center lg:col-span-3">

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#bd922f]">
                        Life at Northfield
                    </p>

                    <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#10233e]">
                        More Than a Degree,
                        <span className="block">It's an Experience</span>
                    </h2>

                    <div className="mt-3 h-[2px] w-10 bg-[#bd922f]" />

                    <p className="mt-4 text-xs leading-5 text-gray-600">
                        From student clubs to global exchange programs, find endless
                        opportunities to grow, connect, and lead.
                    </p>

                    <a
                        href="#campus"
                        className="group mt-5 inline-flex w-fit items-center gap-3 border border-gray-300 px-4 py-3 text-[10px] font-bold text-[#102947] transition-all duration-300 hover:border-[#bd922f] hover:bg-[#bd922f] hover:text-white"
                    >
                        EXPLORE CAMPUS LIFE
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>

                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 rounded-md border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        >

                            {/* Icon */}
                            <div className={`shrink-0 text-3xl ${feature.color}`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                                    {feature.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
