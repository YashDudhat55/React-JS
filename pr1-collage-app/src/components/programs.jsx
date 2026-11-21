
export default function Programs() {
    const programs = [
        {
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=85",
            icon: "▱",
            title: "Business & Economics",
            description: "Build leadership and innovative skills.",
            color: "bg-[#102947]",
        },
        {
            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=85",
            icon: "⚗",
            title: "Engineering & Technology",
            description: "Design, innovate, and solve real-world problems.",
            color: "bg-[#c99a2e]",
        },
        {
            image:
                "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=85",
            icon: "▣",
            title: "Arts & Humanities",
            description: "Explore cultures, ideas, and creativity.",
            color: "bg-[#102947]",
        },
        {
            image:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85",
            icon: "♡",
            title: "Health & Sciences",
            description: "Advance healthcare and improve lives.",
            color: "bg-[#c99a2e]",
        },
        {
            image:
                "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=85",
            icon: "◈",
            title: "Environment & Sustainability",
            description: "Create a better future for our planet.",
            color: "bg-[#102947]",
        },
    ];

    return (
        <section id="programs" className="bg-white py-12">

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-6">

                {/* Left Content */}
                <div className="flex flex-col justify-center lg:col-span-1">

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#bd922f]">
                        Our Programs
                    </p>

                    <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#10233e]">
                        Find Your Path to Success
                    </h2>

                    <div className="mt-3 h-[2px] w-10 bg-[#bd922f]" />

                    <p className="mt-4 text-xs leading-5 text-gray-600">
                        Choose from 100+ Undergraduate, Graduate, and Professional
                        programs across various disciplines.
                    </p>

                    <a
                        href="#all-programs"
                        className="group mt-5 inline-flex w-fit items-center gap-3 bg-[#102947] px-4 py-3 text-[10px] font-bold text-white transition-all duration-300 hover:bg-[#bd922f]"
                    >
                        VIEW ALL PROGRAMS
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>

                </div>

                {/* Program Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-5 lg:grid-cols-5">

                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-md border border-gray-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        >

                            {/* Image */}
                            <div className="h-32 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Icon */}
                            <div className="relative -mt-5 flex justify-center">
                                <div
                                    className={`flex h-11 w-11 items-center justify-center rounded-full border-4 border-white text-xl text-white ${program.color}`}
                                >
                                    {program.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-3 pb-4 pt-1">

                                <h3 className="min-h-9 text-xs font-bold leading-4 text-gray-900">
                                    {program.title}
                                </h3>

                                <p className="mt-2 min-h-9 text-[10px] leading-4 text-gray-500">
                                    {program.description}
                                </p>

                                {/* Explore Link */}
                                <a
                                    href="#all-programs"
                                    className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold text-gray-900 transition-colors duration-300 hover:text-[#bd922f]"
                                >
                                    EXPLORE
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
