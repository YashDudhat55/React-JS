
export default function MySkills({ darkMode }) {

    const skills = [
        { name: "HTML", icon: "5", color: "text-orange-600", bg: "bg-orange-50" },
        { name: "CSS", icon: "3", color: "text-blue-600", bg: "bg-blue-50" },
        { name: "JavaScript", icon: "JS", color: "text-yellow-500", bg: "bg-yellow-50" },
        { name: "React", icon: "⚛", color: "text-cyan-500", bg: "bg-cyan-50" },
        { name: "Bootstrap", icon: "B", color: "text-purple-600", bg: "bg-purple-50" },
        { name: "GitHub", icon: "◉", color: "text-black", bg: "bg-gray-100" },
    ];

    return (

        <section
            id="skills"
            className={`py-14 ${darkMode ? "bg-[#111d3a]" : "bg-[#eaf1ff]"
                }`}
        >

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-2 flex items-center justify-center gap-5">

                    <span className="h-0.5 w-16 bg-blue-600" />

                    <h2 className="text-3xl font-extrabold">
                        My <span className="text-blue-600">Skills</span>
                    </h2>

                    <span className="h-0.5 w-16 bg-blue-600" />

                </div>

                <p className={`mb-8 text-center text-sm ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    Technologies I Work With
                </p>

                {/* Skills Cards */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

                    {skills.map((skill, index) => (

                        <div
                            key={index}
                            className={`group flex flex-col items-center justify-center rounded-xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode
                                    ? "border-gray-700 bg-[#182849]"
                                    : "border-blue-100 bg-white"
                                }`}
                        >

                            <span className={`flex h-12 items-center justify-center text-4xl font-extrabold ${skill.color}`}>
                                {skill.icon}
                            </span>

                            <h3 className="mt-3 text-sm font-bold">
                                {skill.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
