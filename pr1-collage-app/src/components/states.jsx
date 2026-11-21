
export default function Stats() {
    const stats = [
        {
            icon: "♧",
            number: "12,000+",
            label: "Students Enrolled",
        },
        {
            icon: "◎",
            number: "90+",
            label: "Countries Represented",
        },
        {
            icon: "♜",
            number: "100+",
            label: "Academic Programs",
        },
        {
            icon: "🏆",
            number: "#87",
            label: "Top Universities Worldwide",
        },
        {
            icon: "♙",
            number: "95%",
            label: "Graduate Employment Rate",
        },
    ];

    return (
        <section className="w-full bg-[#092747] py-6">

            <div className="mx-auto grid max-w-7xl grid-cols-2 divide-gray-700 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">

                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center gap-3 border-gray-700 px-3 py-4 transition-all duration-300 hover:bg-white/5 lg:py-2"
                    >

                        {/* Icon */}
                        <div className="shrink-0 text-3xl text-[#c99a2e]">
                            {stat.icon}
                        </div>

                        {/* Statistics */}
                        <div>
                            <h2 className="font-serif text-2xl leading-tight text-white sm:text-3xl">
                                {stat.number}
                            </h2>

                            <p className="mt-1 whitespace-nowrap text-[9px] text-gray-300">
                                {stat.label}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}
