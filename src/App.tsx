import { useEffect, useState } from "react";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import WorkExperience from "./sections/WorkExperience";
import TerminalLoading from "./components/TerminalLoading";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setLoading(false);
    }, 3750)

    return () => {
      clearTimeout(myTimeout);
    }
  }, [])

  if (loading) return <TerminalLoading />

  return (
    <div className="min-h-screen h-full flex flex-col justify-between animate-fadeIn">
      <Header />
      <main className="bg-base-200 flex-1">
        <Hero />
        <TechStack />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;