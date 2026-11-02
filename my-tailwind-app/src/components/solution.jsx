export default function Solutions() {
  const solutions = [
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
      icon: "⌂",
      title: "Modular Homes",
      description:
        "Beautiful, energy-efficient homes built for modern living.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80",
      icon: "▦",
      title: "Multi-Family",
      description:
        "Scalable housing solutions built faster, for more people.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
      icon: "▣",
      title: "Commercial",
      description:
        "Offices, retail, and mixed-use spaces built with precision.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80",
      icon: "◆",
      title: "Institutions",
      description:
        "Schools and facilities that support communities.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            Modular Solutions
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built for Every Need
          </h2>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Card Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="relative px-5 pb-5 pt-6">

                {/* Icon */}
                <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-blue-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  {solution.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="mb-4 min-h-10 text-sm leading-5 text-slate-600">
                  {solution.description}
                </p>

                {/* Learn More */}
                <a
                  href="#quote"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800"
                >
                  Learn More

                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-2">
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