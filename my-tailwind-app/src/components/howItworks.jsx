export default function HowItWorks() {
  const steps = [
    {
      icon: "▣",
      title: "Plan",
      description:
        "We collaborate and design to bring your vision to life.",
    },
    {
      icon: "♜",
      title: "Build",
      description:
        "Modules are built in our factory with precision and quality control.",
    },
    {
      icon: "🚚",
      title: "Deliver",
      description:
        "Modules are transported to your site, ready for quick installation.",
    },
    {
      icon: "♧",
      title: "Install",
      description:
        "Our team assembles modules quickly and efficiently on-site.",
    },
    {
      icon: "⚲",
      title: "Enjoy",
      description:
        "Move in sooner and enjoy a better building experience.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            How It Works
          </p>

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            A Smarter Way to Build
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">

          {/* Dotted Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden border-t-2 border-dotted border-blue-300 lg:block"></div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex flex-col items-center text-center"
            >

              {/* Icon Circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-2xl text-white shadow-md ring-1 ring-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700 group-hover:shadow-xl">
                <span className="transition-transform duration-300 group-hover:rotate-6">
                  {step.icon}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="mt-5 text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2 max-w-[190px] text-sm leading-5 text-slate-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}