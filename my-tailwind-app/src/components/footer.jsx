export default function Footer() {
  const solutions = [
    "Modular Homes",
    "Multi-Family",
    "Commercial",
    "Institutions",
  ];

  const company = [
    "About Us",
    "Our Process",
    "Careers",
    "News",
  ];

  const resources = [
    "Project Gallery",
    "Blog",
    "FAQs",
    "Brochures",
  ];

  return (
    <footer className="bg-slate-800 px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company Logo and Description */}
          <div>
            <a href="#" className="group mb-4 inline-flex items-center gap-2">
              {/* Logo Icon */}
              <div className="flex h-9 items-end gap-1">
                <div className="h-5 w-1.5 bg-slate-300 transition-colors duration-300 group-hover:bg-blue-400"></div>
                <div className="h-8 w-1.5 bg-white transition-colors duration-300 group-hover:bg-blue-400"></div>
                <div className="h-10 w-1.5 bg-slate-300 transition-colors duration-300 group-hover:bg-blue-400"></div>
                <div className="h-6 w-1.5 bg-white transition-colors duration-300 group-hover:bg-blue-400"></div>
              </div>

              <div>
                <h2 className="text-lg font-extrabold tracking-[0.2em]">
                  SKYLINE
                </h2>

                <p className="text-[9px] font-semibold tracking-[0.4em] text-slate-300">
                  MODULAR
                </p>
              </div>
            </a>

            <p className="max-w-xs text-sm leading-5 text-slate-300">
              Modern buildings. Smarter process.
              Better results. That's the Skyline
              Modular promise.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white"
              >
                ◎
              </a>

              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
              >
                in
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-bold">
              Solutions
            </h3>

            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item}>
                  <a
                    href="#solutions"
                    className="text-sm text-slate-300 transition-colors duration-300 hover:pl-1 hover:text-blue-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-bold">
              Company
            </h3>

            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#about"
                    className="text-sm text-slate-300 transition-colors duration-300 hover:pl-1 hover:text-blue-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-bold">
              Resources
            </h3>

            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#projects"
                    className="text-sm text-slate-300 transition-colors duration-300 hover:pl-1 hover:text-blue-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        {/* Copyright */}
        <div className="mt-6 border-t border-slate-600 pt-5 text-center">
          <p className="text-xs text-slate-400">
            © 2024 Skyline Modular. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
