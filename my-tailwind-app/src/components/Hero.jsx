import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
      title: "Built Smarter.",
      highlight: "Delivered Faster.",
      description:
        "Premium modular and prefab buildings engineered for quality, efficiency, and a better way to build.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
      title: "Designed Better.",
      highlight: "Built for Life.",
      description:
        "Modern modular spaces designed with smart layouts, premium materials, and lasting comfort.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
      title: "Build with Confidence.",
      highlight: "Move in Sooner.",
      description:
        "Discover a faster, smarter construction experience with quality you can trust.",
    },
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1 ? 0 : previousSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="solutions"
      className="relative min-h-[540px] overflow-hidden bg-slate-100"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt="Modern modular house"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10"></div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-5 py-16 lg:px-8">
        <div className="max-w-xl">

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {slides[currentSlide].title}

            <span className="block text-blue-600">
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-md text-base leading-7 text-slate-700 sm:text-lg">
            {slides[currentSlide].description}
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-3 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl active:scale-95"
            >
              Explore Solutions

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              id="quote"
              href="mailto:info@skylinemodular.com?subject=Free%20Quote"
              className="rounded-md border border-blue-600 bg-white/90 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg active:scale-95"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}