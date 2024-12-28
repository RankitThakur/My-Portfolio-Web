import { NextPage } from "next";
import HomeLayout from "../components/layouts/HomeLayout";
import CustomHead from "../components/Head";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import ProjectsCTA from "../components/ProjectsCTA";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead
        description="My Name is Rankit Singh Thakur and I live in India. I'm a Full-Stack Developer with over two years of experience in building web applications."
        title="Rankit Singh Thakur | Full-Stack Developer"
      />
      <HomeLayout>
        <Hero />
        <AboutMe />
        <ProjectsCTA />
        <Education />
        <Skills />
        <Experience />
      </HomeLayout>
    </>
  );
};

export default Home;

