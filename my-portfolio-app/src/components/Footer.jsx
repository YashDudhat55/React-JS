
import { Code2 } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/",
      name: "GitHub"
    },
    {
      icon: FaLinkedinIn,
      link: "https://linkedin.com/",
      name: "LinkedIn"
    },
    {
      icon: FaInstagram,
      link: "https://instagram.com/",
      name: "Instagram"
    },
    {
      icon: FaYoutube,
      link: "https://youtube.com/",
      name: "YouTube"
    }
  ];

  return (
    <footer className="bg-[#0c1c46] py-8 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Footer Logo */}
        <div className="flex items-center gap-3">

          <Code2 className="h-12 w-12 text-blue-500" />

          <div>
            <h3 className="text-lg font-extrabold">
              Yash Dudhat
            </h3>

            <p className="text-xs text-gray-300">
              Full Stack Web Developer
            </p>
          </div>

        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-300">
          © 2026 Yash Dudhat. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">

          {socialLinks.map((item) => {

            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                title={item.name}
                className="rounded-full bg-white p-2 text-[#0c1c46] transition hover:bg-blue-500 hover:text-white"
              >
                <Icon size={20} />
              </a>
            );

          })}

        </div>

      </div>

    </footer>
  );
}
