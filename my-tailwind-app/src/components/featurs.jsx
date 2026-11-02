export default function Features() {
  const features = [
    {
      icon: "♧",
      title: "Built in Controlled",
      subtitle: "Factory Settings",
    },
    {
      icon: "◷",
      title: "50% Faster",
      subtitle: "Project Delivery",
    },
    {
      icon: "♢",
      title: "Superior Quality",
      subtitle: "& Durability",
    },
    {
      icon: "♧",
      title: "Sustainable",
      subtitle: "by Design",
    },
  ];

  return (
    <section
      id="features"
      className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 pb-8"
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-white shadow-lg sm:grid-cols-2 lg:grid-cols-4">

        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b border-slate-200 px-6 py-5 last:border-b-0 sm:even:border-r-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-3xl text-blue-600">
              {feature.icon}
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                {feature.subtitle}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
