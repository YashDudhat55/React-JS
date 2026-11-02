import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <div className="flex h-10 items-end gap-1">
            <div className="h-6 w-2 bg-blue-400 transition-all duration-300 group-hover:h-8 group-hover:bg-blue-500"></div>

            <div className="h-9 w-2 bg-blue-500 transition-all duration-300 group-hover:h-10 group-hover:bg-blue-600"></div>

            <div className="h-11 w-2 bg-blue-700 transition-all duration-300 group-hover:bg-blue-800"></div>

            <div className="h-7 w-2 bg-blue-400 transition-all duration-300 group-hover:h-9 group-hover:bg-blue-500"></div>
          </div>

          <div>
            <h2 className="text-lg font-extrabold tracking-[0.2em] text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
              SKYLINE
            </h2>

            <p className="text-[10px] font-semibold tracking-[0.4em] text-slate-700 transition-colors duration-300 group-hover:text-blue-500">
              MODULAR
            </p>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-3xl text-slate-800 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 active:scale-90 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="inline-block transition-transform duration-300 hover:rotate-180">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-5 border-t bg-white p-6 shadow-lg lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:p-0 lg:shadow-none`}
        >
          {/* Solutions */}
          <a
            href="#solutions"
            onClick={() => setMenuOpen(false)}
            className="group relative w-fit py-1 text-sm text-slate-700 transition-colors duration-300 hover:text-blue-600"
          >
            Solutions
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Projects */}
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="group relative w-fit py-1 text-sm text-slate-700 transition-colors duration-300 hover:text-blue-600"
          >
            Projects
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* How It Works */}
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="group relative w-fit py-1 text-sm text-slate-700 transition-colors duration-300 hover:text-blue-600"
          >
            How It Works
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Why Modular */}
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="group relative w-fit py-1 text-sm text-slate-700 transition-colors duration-300 hover:text-blue-600"
          >
            Why Modular
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* About Us */}
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="group relative w-fit py-1 text-sm text-slate-700 transition-colors duration-300 hover:text-blue-600"
          >
            About Us
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Phone Number */}
          <a
            href="tel:8887598230"
            className="group flex w-fit items-center gap-2 whitespace-nowrap text-sm font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:text-blue-900"
          >
            <span className="inline-block transition-transform duration-300 group-hover:rotate-12">
              ☎
            </span>
            (888) SKY-8230
          </a>

          {/* Quote Button */}
          <a
            href="#quote"
            onClick={() => setMenuOpen(false)}
            className="rounded-md bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl active:translate-y-0 active:scale-95"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}