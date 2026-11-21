
export default function News() {
    const news = [
        {
            date: "MAY",
            day: "10",
            image:
                "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=85",
            title: "Northfield Celebrates Class of 2024",
            description:
                "A milestone moment as we honor the achievements of our graduates.",
        },
        {
            date: "MAY",
            day: "06",
            image:
                "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=85",
            title: "AI in Business: A Panel Discussion",
            description:
                "Experts discuss how AI is shaping the future of business.",
        },
        {
            date: "APR",
            day: "28",
            image:
                "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=85",
            title: "Spring Open House Join Us!",
            description:
                "Explore our campus and discover what makes Northfield special.",
        },
        {
            date: "APR",
            day: "20",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
            title: "New Research Breakthrough by Our Faculty",
            description:
                "Innovative research with real-world impact and global recognition.",
        },
    ];

    return (
        <section id="news" className="bg-white py-10">

            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mb-5 flex items-center justify-between">

                    <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#bd922f]">
                        Latest News & Events
                    </h2>

                    <a
                        href="#all-news"
                        className="group flex items-center gap-2 text-[10px] font-bold text-[#10233e] transition-colors hover:text-[#bd922f]"
                    >
                        VIEW ALL NEWS
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </a>

                </div>

                {/* News Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {news.map((item, index) => (
                        <article
                            key={index}
                            className="group overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            {/* Image */}
                            <div className="relative h-36 overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Date Badge */}
                                <div className="absolute left-2 top-2 flex h-11 w-11 flex-col items-center justify-center bg-[#102947] text-white shadow-md">

                                    <span className="text-[9px] font-bold">
                                        {item.date}
                                    </span>

                                    <span className="text-lg font-bold leading-5">
                                        {item.day}
                                    </span>

                                </div>

                            </div>

                            {/* Card Content */}
                            <div className="p-3">

                                <h3 className="min-h-10 text-sm font-bold leading-5 text-gray-900 transition-colors group-hover:text-[#bd922f]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 min-h-10 text-[11px] leading-4 text-gray-600">
                                    {item.description}
                                </p>

                                {/* Read More */}
                                <a
                                    href="#news"
                                    className="group/link mt-3 inline-flex items-center gap-2 text-[10px] font-bold text-[#10233e] transition-colors hover:text-[#bd922f]"
                                >
                                    READ MORE
                                    <span className="transition-transform group-hover/link:translate-x-1">
                                        →
                                    </span>
                                </a>

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}
