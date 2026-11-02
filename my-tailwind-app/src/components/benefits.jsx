export default function Benefits() {
  const benefits = [
    {
      icon: "◷",
      value: "50%",
      title: "Faster Delivery",
    },
    {
      icon: "$",
      value: "20%",
      title: "Cost Savings",
    },
    {
      icon: "♢",
      value: "High",
      title: "Quality Control",
    },
    {
      icon: "♧",
      value: "Low",
      title: "Environmental Impact",
    },
  ];

  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main Blue Box */}
        <div className="grid overflow-hidden rounded-lg bg-blue-600 text-white shadow-lg md:grid-cols-2">

          {/* Building Image */}
          <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-blue-700 p-6 sm:p-8">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85"
              alt="Modern modular building under construction"
              loading="lazy"
              className="h-full max-h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Benefits Content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

            {/* Heading */}
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-100">
              Speed & Efficiency
            </p>

            <h2 className="mb-7 text-2xl font-extrabold leading-tight sm:text-3xl">
              Better Buildings. Better Outcomes.
            </h2>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6">

              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                >

                  {/* Icon */}
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600">
                    {benefit.icon}
                  </div>

                  {/* Value */}
                  <h3 className="text-2xl font-bold">
                    {benefit.value}
                  </h3>

                  {/* Title */}
                  <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                    {benefit.title}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}