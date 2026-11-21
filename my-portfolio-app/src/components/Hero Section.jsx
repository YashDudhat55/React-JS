
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection({ darkMode }) {

    const slides = [
        {
            title: "Code",
            highlight: "Create",
            last: "Innovate",
            description: "Let's build something amazing together!",
        },
        {
            title: "Design",
            highlight: "Develop",
            last: "Deliver",
            description: "Turning creative ideas into digital experiences.",
        },
        {
            title: "Learn",
            highlight: "Build",
            last: "Grow",
            description: "Always exploring new technologies and possibilities.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatic Slider
    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);

    }, []);

    // Manual Navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            (prev - 1 + slides.length) % slides.length
        );
    };

    return (

        <section
            id="home"
            className={`relative overflow-hidden ${
                darkMode
                    ? "bg-gradient-to-r from-[#101e40] to-[#172d58]"
                    : "bg-gradient-to-r from-[#eaf1ff] to-[#dce9ff]"
            }`}
        >

            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">

                {/* LEFT CONTENT */}
                <div>

                    <span className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        darkMode
                            ? "bg-blue-900 text-blue-200"
                            : "bg-blue-100 text-[#101b3d]"
                    }`}>
                        Hello, I'm
                    </span>

                    <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">

                        Yash <span className="text-blue-600">
                            Dudhat
                        </span>

                    </h1>

                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                        Full Stack Web Developer
                    </h2>

                    <p className={`mt-4 max-w-md text-base leading-6 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                        I love coding and building beautiful websites.
                        I enjoy turning ideas into reality with clean code
                        and creative design.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-7 flex flex-wrap gap-4">

                        <a
                            href="#work"
                            className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
                        >
                            Explore My Work

                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-blue-600 px-6 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        >
                            Contact Me
                        </a>

                    </div>

                </div>


                {/* RIGHT SLIDER */}
                <div className="relative flex flex-col items-center justify-center">

                    {/* Slider Window */}
                    <div className="relative flex h-64 w-full max-w-xl items-center justify-center overflow-hidden rounded-3xl">

                        {slides.map((slide, index) => (

                            <div
                                key={index}
                                className={`absolute inset-0 flex flex-col items-center justify-center px-5 text-center transition-all duration-700 ease-in-out ${
                                    currentSlide === index
                                        ? "translate-x-0 opacity-100"
                                        : currentSlide > index
                                            ? "-translate-x-full opacity-0"
                                            : "translate-x-full opacity-0"
                                }`}
                            >

                                <div className={`w-full rounded-[40%] px-5 py-12 ${
                                    darkMode
                                        ? "bg-blue-900/40"
                                        : "bg-blue-200/50"
                                }`}>

                                    <h3 className="text-2xl font-extrabold md:text-3xl">

                                        {slide.title}

                                        <span className="mx-2 text-blue-600">
                                            •
                                        </span>

                                        {slide.highlight}

                                        <span className="mx-2 text-blue-600">
                                            •
                                        </span>

                                        {slide.last}

                                    </h3>

                                    <p className={`mt-4 text-sm ${
                                        darkMode
                                            ? "text-gray-300"
                                            : "text-gray-700"
                                    }`}>
                                        {slide.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* SLIDER CONTROLS */}
                    <div className="mt-5 flex items-center justify-center gap-5">

                        {/* Previous */}
                        <button
                            onClick={prevSlide}
                            aria-label="Previous slide"
                            className="rounded-full p-2 text-blue-600 transition hover:bg-blue-100"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-3">

                            {slides.map((_, index) => (

                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`h-3 rounded-full transition-all duration-300 ${
                                        currentSlide === index
                                            ? "w-3 bg-blue-600"
                                            : "w-3 bg-blue-300 hover:bg-blue-500"
                                    }`}
                                />

                            ))}

                        </div>

                        {/* Next */}
                        <button
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="rounded-full p-2 text-blue-600 transition hover:bg-blue-100"
                        >
                            <ChevronRight size={20} />
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}
