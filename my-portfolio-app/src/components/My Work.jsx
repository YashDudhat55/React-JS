
import {
    ShoppingCart,
    Calculator,
    ClipboardList,
    ArrowRight
} from "lucide-react";

export default function MyWork({ darkMode }) {

    const projects = [
        {
            title: "E-Commerce Website",
            description: "A simple and responsive online store website.",
            icon: ShoppingCart,
            link: "#",
        },
        {
            title: "Calculator App",
            description: "A basic calculator with clean and modern design.",
            icon: Calculator,
            link: "#",
        },
        {
            title: "Todo App",
            description: "Manage your daily tasks with ease.",
            icon: ClipboardList,
            link: "#",
        },
    ];

    return (

        <section
            id="work"
            className={`py-14 ${darkMode ? "bg-[#080f25]" : "bg-white"
                }`}
        >

            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mb-2 flex items-center justify-center gap-5">

                    <span className="h-0.5 w-16 bg-blue-600" />

                    <h2 className="text-3xl font-extrabold">
                        My <span className="text-blue-600">Work</span>
                    </h2>

                    <span className="h-0.5 w-16 bg-blue-600" />

                </div>

                <p className={`mb-8 text-center text-sm ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    Some of my latest projects
                </p>

                {/* Project Cards */}
                <div className="grid gap-5 md:grid-cols-3">

                    {projects.map((project, index) => {

                        const Icon = project.icon;

                        return (

                            <article
                                key={index}
                                className={`group rounded-2xl border p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode
                                        ? "border-gray-700 bg-[#111d3a]"
                                        : "border-blue-100 bg-white"
                                    }`}
                            >

                                <Icon className="mx-auto h-12 w-12 text-blue-600 transition-transform duration-300 group-hover:scale-110" />

                                <h3 className="mt-4 text-lg font-bold">
                                    {project.title}
                                </h3>

                                <p className={`mt-2 text-sm leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"
                                    }`}>
                                    {project.description}
                                </p>

                                <a
                                    href={project.link}
                                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
                                >
                                    View Project

                                    <ArrowRight className="h-4 w-4" />

                                </a>

                            </article>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}
