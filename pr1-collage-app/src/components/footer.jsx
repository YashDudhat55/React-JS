
export default function Footer() {
  const links = [
    {
      title: "QUICK LINKS",
      items: [
        "About Us",
        "Academics",
        "Admissions",
        "Campus Life",
        "News & Events",
        "Contact",
      ],
    },
    {
      title: "PROGRAMS",
      items: [
        "Undergraduate",
        "Graduate",
        "Online Programs",
        "Professional Programs",
        "Certificates",
      ],
    },
    {
      title: "RESOURCES",
      items: [
        "Current Students",
        "Faculty & Staff",
        "Alumni",
        "Parents",
        "Library",
      ],
    },
  ];

  return (
    <footer className="w-full">

      {/* Newsletter Section */}
      <div className="bg-[#c99a2e] py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

          {/* Newsletter Content */}
          <div className="flex items-center gap-4">
            <div className="text-3xl text-[#102947]">
              ✉
            </div>

            <div>
              <h3 className="text-xs font-bold text-white">
                STAY CONNECTED
              </h3>
              <p className="text-[10px] text-white/90">
                Subscribe to get the latest news, events, and updates from Northfield University.
              </p>
            </div>
          </div>

          {/* Email Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-white px-3 py-2 text-[10px] text-gray-800 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="bg-[#092747] px-6 py-2 text-[10px] font-bold text-white transition-colors duration-300 hover:bg-[#163d66]"
            >
              SUBSCRIBE
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#092747] text-white">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-7 sm:grid-cols-2 lg:grid-cols-5">

          {/* University Logo */}
          <div>

            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-9 items-center justify-center border border-[#c99a2e] bg-[#102947] font-serif text-xl text-[#c99a2e]">
                ♛
              </div>

              <div>
                <h2 className="font-serif text-sm font-bold tracking-wide">
                  NORTHFIELD
                </h2>
                <p className="font-serif text-[10px] tracking-widest">
                  UNIVERSITY
                </p>
                <p className="text-[7px] tracking-wider text-gray-300">
                  LEARN. LEAD. SUCCEED.
                </p>
              </div>
            </a>

            <p className="mt-4 text-[10px] leading-5 text-gray-300">
              Empowering minds. Building leaders.
              <br />
              Creating a better tomorrow.
            </p>

            {/* Social Media */}
            <div className="mt-4 flex items-center gap-3">

              {["f", "𝕏", "◎", "in", "▶"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-500 text-[10px] font-bold text-white transition-all duration-300 hover:border-[#c99a2e] hover:bg-[#c99a2e]"
                >
                  {social}
                </a>
              ))}

            </div>

          </div>

          {/* Footer Links */}
          {links.map((column, index) => (
            <div key={index}>

              <h3 className="mb-4 border-b border-gray-700 pb-2 text-[10px] font-bold tracking-wide">
                {column.title}
              </h3>

              <ul className="space-y-2">
                {column.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[10px] text-gray-300 transition-colors duration-300 hover:text-[#c99a2e]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          ))}

          {/* Contact Us */}
          <div>

            <h3 className="mb-4 border-b border-gray-700 pb-2 text-[10px] font-bold tracking-wide">
              CONTACT US
            </h3>

            <div className="space-y-3 text-[10px] text-gray-300">

              <p className="flex items-start gap-2">
                <span className="text-[#c99a2e]">⌖</span>
                <span>
                  123 University Avenue
                  <br />
                  Boston, MA 02115
                </span>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-[#c99a2e]">☎</span>
                (617) 555-1234
              </p>

              <p className="flex items-center gap-2">
                <span className="text-[#c99a2e]">✉</span>
                info@northfield.edu
              </p>

            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-[9px] text-gray-400 sm:flex-row">

            <p>
              © 2024 Northfield University. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="transition-colors hover:text-[#c99a2e]">
                Privacy Policy
              </a>

              <span>|</span>

              <a href="#" className="transition-colors hover:text-[#c99a2e]">
                Terms of Use
              </a>

              <span>|</span>

              <a href="#" className="transition-colors hover:text-[#c99a2e]">
                Accessibility
              </a>
            </div>

          </div>
        </div>

      </div>

    </footer>
  );
}
