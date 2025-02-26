import GridContainer from "@/components/animations/grid/GridContainer";
import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";
import HeaderComponent from "@/components/home/header/Header";
import ScrollBar from "../common/ScrollBar";
import Client from "./clients/Client";
import Footer from "./footer/Footer";
import ProjectSection from "./projects/ProjectSection";

export default async function Home ()
{
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Scroll Progress Bar */}
      <ScrollBar/>

      {/* Cursor and Background */}
      {/* <CursorContainer /> */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-20">
        <GridContainer />
      </div>

      {/* Main Content Sections */}
      <div id="header" className="w-full sticky top-0 z-10 md:px-20 px-5 md:pb-10 pb-5">
        <HeaderComponent />
      </div>

      <About />
      <ProjectSection />
      <Client/>
      <Contact />
      <Footer/>
    </div>
  );
}