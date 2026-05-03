import { useState } from "react";
import Menu from "./components/menu";
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Menu />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;