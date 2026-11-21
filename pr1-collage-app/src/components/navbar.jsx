export default function Navbar() {
    const links = [
        "ABOUT US",
        "ACADEMICS",
        "ADMISSIONS",
        "CAMPUS LIFE",
        "RESEARCH",
        "NEWS & EVENTS",
        "CONTACT",
    ];

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">

                {/* Logo */}
                <a href="#" className="flex shrink-0 items-center gap-2">

                    <div>
                        <h2 className="font-serif text-lg font-bold leading-5 tracking-wide text-[#10233e]">
                            NORTHFIELD
                        </h2>
                        <p className="font-serif text-xs font-semibold tracking-widest text-[#10233e]">
                            UNIVERSITY
                        </p>
                        <p className="text-[7px] font-medium tracking-wider text-gray-600">
                            LEARN. LEAD. SUCCEED.
                        </p>
                    </div>
                </a>

                {/* Navigation Links */}
                <div className="hidden items-center gap-6 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[10px] font-bold text-gray-800 transition-colors duration-300 hover:text-[#bd922f]"
                        >
                            {link}
                        </a>
                    ))}

                    {/* Apply Button */}
                    <a
                        href="#"
                        className="rounded-sm bg-[#bd922f] px-5 py-2 text-[10px] font-bold text-white transition-all duration-300 hover:bg-[#9d7620] hover:shadow-md"
                    >
                        APPLY NOW
                    </a>
                </div>
            </div>
        </nav>
    );
}
