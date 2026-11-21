
import { useState } from "react";

import Navbar from "./components/navbar";
import HeroSection from "./components/Hero Section";
import AboutMe from "./components/About Me";
import MySkills from "./components/My Skills";
import MyWork from "./components/My Work";
import ContactMe from "./components/Contact Me";
import Footer from "./components/Footer";

export default function App() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>

            <div className={`min-h-screen font-sans transition-colors duration-300 ${
                darkMode
                    ? "bg-[#080f25] text-white"
                    : "bg-white text-[#101b3d]"
            }`}>

                <Navbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <HeroSection darkMode={darkMode} />

                <AboutMe darkMode={darkMode} />

                <MySkills darkMode={darkMode} />

                <MyWork darkMode={darkMode} />

                <ContactMe darkMode={darkMode} />

                <Footer />

            </div>

        </div>
    );
}
