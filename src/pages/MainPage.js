import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Stack from "../components/Stack/Stack";
import Projects from "../components/Projects/Projects";
import Contacts from "../components/Contacts/Contacts";

const Main = () => {
  return (
    <div id="about">
      <Header />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Main;
