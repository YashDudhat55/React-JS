export default function Projects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      name: "Lakeside Retreat",
      location: "Lake Arrowhead, CA",
      category: "Modular Home",
      description:
        "A custom modular home designed for comfort, views, and year-round living.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      name: "The Summit",
      location: "Denver, CO",
      category: "Multi-Family",
      description:
        "A 48-unit complex delivered in half the time of traditional construction.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      name: "Elevate Office",
      location: "Austin, TX",
      category: "Commercial",
      description:
        "A sleek, sustainable office space built for productivity and growth.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
              Featured Projects
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Real Projects. Real Results.
            </h2>
          </div>

          {/* View All Projects */}
          <a
            href="#all-projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800"
          >
            View All Projects

            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className="p-4">

                {/* Name and Category */}
                <div className="flex flex-wrap items-start justify-between gap-2">

                  <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {project.name}
                  </h3>

                  <span className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                    {project.category}
                  </span>
                </div>

                {/* Location */}
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <span>⌖</span>
                  {project.location}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-5 text-slate-600">
                  {project.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}