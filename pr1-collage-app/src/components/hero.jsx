
export default function Hero() {
    const features = [
        {
            icon: "◉",
            title: "Academic Excellence",
            description: "World-class faculty and innovative programs.",
            color: "bg-[#102947]",
        },
        {
            icon: "♟",
            title: "Global Community",
            description: "Diverse students from around the world.",
            color: "bg-[#c99a2e]",
        },
        {
            icon: "♜",
            title: "Modern Campus",
            description: "State-of-the-art facilities and resources.",
            color: "bg-[#102947]",
        },
        {
            icon: "☆",
            title: "Career Focused",
            description: "Preparing you for a successful future beyond graduation.",
            color: "bg-[#c99a2e]",
        },
    ];

    return (
        <section className="relative bg-white">

            {/* Hero Background */}
            <div
                className="relative min-h-[520px] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85')",
                }}
            >

                {/* White Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-35% to-transparent" />

                {/* Hero Content */}
                <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16">

                    <div className="max-w-[510px]">

                        {/* Small Heading */}
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#bd922f]">
                            Shaping Minds. Inspiring Futures.
                        </p>

                        {/* Main Heading */}
                        <h1 className="font-serif text-4xl font-bold leading-[1.15] text-[#10233e] sm:text-5xl">
                            A Legacy of Excellence.
                            <span className="mt-1 block text-[#bd922f]">
                                A Future of Impact.
                            </span>
                        </h1>

                        {/* Divider */}
                        <div className="mt-4 h-[2px] w-10 bg-[#bd922f]" />

                        {/* Description */}
                        <p className="mt-4 max-w-[350px] text-sm leading-6 text-gray-700">
                            At Northfield University, we empower students to
                            think critically, lead courageously, and create
                            meaningful change in the world.
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-wrap gap-3">

                            <a
                                href="#programs"
                                className="group flex items-center gap-3 bg-[#102947] px-5 py-3 text-[11px] font-bold text-white transition-all duration-300 hover:bg-[#bd922f]"
                            >
                                EXPLORE PROGRAMS
                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                            <a
                                href="#campus"
                                className="group flex items-center gap-3 border border-gray-400 bg-white/80 px-5 py-3 text-[11px] font-bold text-[#10233e] transition-all duration-300 hover:border-[#bd922f] hover:bg-[#bd922f] hover:text-white"
                            >
                                VISIT CAMPUS
                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Ranking Card */}
                <div className="absolute bottom-12 right-6 hidden w-36 bg-[#092747] p-5 text-white shadow-xl md:block lg:right-10">

                    <div className="mb-4 text-3xl text-[#c99a2e]">
                        ♧
                    </div>

                    <p className="text-[10px]">Ranked Among</p>
                    <h3 className="text-xl font-bold">Top 100</h3>
                    <p className="text-xs">Universities Worldwide</p>

                    <div className="mt-3 h-[2px] w-8 bg-[#c99a2e]" />

                </div>

            </div>

            {/* Features Section */}
            <div className="relative z-10 mx-auto -mt-5 max-w-7xl px-5 pb-6">

                <div className="grid grid-cols-1 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-md sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 px-3 py-4 transition-all duration-300 hover:-translate-y-1"
                        >

                            {/* Icon */}
                            <div
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl text-white ${feature.color}`}
                            >
                                {feature.icon}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-1 text-[10px] leading-4 text-gray-600">
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
