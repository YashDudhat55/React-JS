import { useEffect } from "react";

import Header from "./components/header";
import Hero from "./components/Hero";
import Features from "./components/featurs.jsx";
import Solutions from "./components/solution.jsx";
import HowItWorks from "./components/howItworks.jsx";
import Benefits from "./components/benefits.jsx";
import Projects from "./components/projects.jsx";
import Footer from "./components/footer.jsx";

function App() {
  useEffect(() => {
    document.title = "Skyline Modular | Built Smarter";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        <Hero />
        <Features />
        <Solutions />
        <HowItWorks />
        <Benefits />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;