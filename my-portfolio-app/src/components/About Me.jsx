
import {
    Laptop,
    Code2,
    Zap,
    Heart
} from "lucide-react";

export default function AboutMe({ darkMode }) {

    const features = [
        { title: "Web Development", icon: Laptop },
        { title: "Clean & Simple Code", icon: Code2 },
        { title: "Creative Problem Solver", icon: Zap },
        { title: "Always Learning", icon: Heart },
    ];

    return (

        <section
            id="about"
            className={`py-14 ${darkMode ? "bg-[#080f25]" : "bg-white"
                }`}
        >

            <div className="mx-auto max-w-6xl px-6">

                {/* Section Heading */}
                <div className="mb-10 flex items-center justify-center gap-5">

                    <span className="h-0.5 w-16 bg-blue-600" />

                    <h2 className="text-3xl font-extrabold">
                        About <span className="text-blue-600">Me</span>
                    </h2>

                    <span className="h-0.5 w-16 bg-blue-600" />

                </div>

                <div className="grid gap-10 md:grid-cols-2">

                    {/* About Description */}
                    <div>

                        <p className={`text-base leading-6 ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}>
                            Hi! I'm Yash Dudhat, a passionate Full Stack Web
                            Developer. I love exploring new technologies and
                            building user-friendly websites. I am always eager
                            to learn, improve and take on new challenges.
                        </p>

                        <a
                            href="#contact"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                            Learn More →
                        </a>

                    </div>

                    {/* Features */}
                    <div className="border-blue-200 pl-0 md:border-l md:pl-10">

                        <div className="space-y-4">

                            {features.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={index}
                                        className="flex items-center gap-5"
                                    >

                                        <Icon className="h-6 w-6 text-blue-600" />

                                        <span className="font-medium">
                                            {item.title}
                                        </span>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
