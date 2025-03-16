import ScrollGsap from "@/components/animations/ScrollGsap";
import About from "@/components/pages/home/about/About";
import Contact from "@/components/pages/home/contact/Contact";
import HeaderComponent from "@/components/pages/home/header/Header";
import ScrollBar from "../../common/ScrollBar";
import Client from "./clients/Client";
import Footer from "./footer/Footer";
import Welcome from "./welcome/Welcome";

export const dynamic = "force-static";

export default async function Home ()
{
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Scroll Progress Bar */}
      <ScrollBar/>

      {/* Main Content Sections */ }
      <div className="w-full h-full sticky top-0 -z-50">
        <Welcome/>
      </div>
      <div id="header" className="w-full sticky top-0 z-10 md:px-20 px-5 md:pb-10 pb-5 bg-black">
        <HeaderComponent />
      </div>

      {/* <div className="relative">
        <VerticalImageLoop/>
      </div> */}
      <About />
      {/* <ProjectSection /> */}
      <Client/>
      <Contact />
      <Footer/>
    </div>
  );
}