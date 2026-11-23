import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaGithub
} from "react-icons/fa6";

export default function MySkills({ darkMode }) {

    const skills = [
        {
            name: "HTML",
            icon: FaHtml5,
            color: "text-[#E34F26]",
            bg: "bg-orange-50",
            darkBg: "bg-orange-500/10",
        },
        {
            name: "CSS",
            icon: FaCss3Alt,
            color: "text-[#1572B6]",
            bg: "bg-blue-50",
            darkBg: "bg-blue-500/10",
        },
        {
            name: "JavaScript",
            icon: FaJs,
            color: "text-[#F7DF1E]",
            bg: "bg-yellow-50",
            darkBg: "bg-yellow-500/10",
        },
        {
            name: "React",
            icon: FaReact,
            color: "text-[#61DAFB]",
            bg: "bg-cyan-50",
            darkBg: "bg-cyan-500/10",
        },
        {
            name: "Bootstrap",
            icon: FaBootstrap,
            color: "text-[#7952B3]",
            bg: "bg-purple-50",
            darkBg: "bg-purple-500/10",
        },
        {
            name: "GitHub",
            icon: FaGithub,
            color: "text-gray-900",
            darkColor: "text-white",
            bg: "bg-gray-100",
            darkBg: "bg-gray-800",
        },
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

                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className={`group flex flex-col items-center justify-center rounded-xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode
                                        ? "border-gray-700 bg-[#182849] hover:border-gray-600"
                                        : "border-blue-100 bg-white hover:border-blue-200"
                                    }`}
                            >

                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${
                                        darkMode ? skill.darkBg : skill.bg
                                    }`}
                                >
                                    <Icon
                                        className={`h-8 w-8 transition-colors ${
                                            darkMode && skill.darkColor ? skill.darkColor : skill.color
                                        }`}
                                    />
                                </div>

                                <h3 className={`mt-3 text-sm font-bold ${
                                    darkMode ? "text-gray-200" : "text-gray-800"
                                }`}>
                                    {skill.name}
                                </h3>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
