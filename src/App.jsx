import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import HireMe from "./components/HireMe";
import Project from "./components/Project";

function App() {
    return (
        <div>
            <Navbar />
            <Bot />
            <Hero />
            <About />
            <Skills />
            <HireMe />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
