import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import WorkExperience from "./sections/WorkExperience";

function App() {

  return (
    <div className="min-h-screen h-full flex flex-col justify-between">
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