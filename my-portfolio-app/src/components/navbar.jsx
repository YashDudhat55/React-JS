
import {
    Code2,
    Moon,
    Sun,
    Menu,
    X
} from "lucide-react";

import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {

    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", link: "#home" },
        { name: "Work", link: "#work" },
        { name: "About", link: "#about" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <nav className={`sticky top-0 z-50 border-b backdrop-blur-lg ${darkMode
                ? "bg-[#0c1630]/95 border-gray-800"
                : "bg-white/95 border-gray-100"
            }`}>

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

                {/* Logo */}
                <a href="#home" className="flex items-center gap-3">
                    
                    <span className="text-2xl font-extrabold text-blue-600">
                        Yash
                    </span>

                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-5 md:flex">

                    {navLinks.map((item, index) => (

                        <a
                            key={index}
                            href={item.link}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${index === 0
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-blue-600 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </a>

                    ))}

                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode
                            ? <Sun className="h-6 w-6 text-yellow-400" />
                            : <Moon className="h-6 w-6" />
                        }
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menuOpen
                            ? <X size={25} />
                            : <Menu size={25} />
                        }
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <div className="flex flex-col gap-2 px-6 pb-5 md:hidden">

                    {navLinks.map((item, index) => (

                        <a
                            key={index}
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-blue-600 hover:text-white"
                        >
                            {item.name}
                        </a>

                    ))}

                </div>

            )}

        </nav>
    );
}
