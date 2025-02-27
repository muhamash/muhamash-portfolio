import AuoraContainer from "@/components/animations/bg/auora/AuoraContainer";
import TextContainer from "@/components/animations/depcretedText/TextContainer";
import FocusConatiner from "@/components/animations/focusText/FocusConatiner";
import TechSlider from "@/components/animations/sliders/techStacks/TechSlider";
import CardContainer from "@/components/animations/TiledCard/CardContainer";
import SectionScrollLayout from "@/components/layouts/SectionScrollLayout";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = async () => 
{
  return (
    <SectionScrollLayout
      className={ "min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gradient-to-br from-slate-900 via-gray-800 backdrop-blur-[3px]" }
    >
      <AuoraContainer />

      <div className="max-w-6xl mx-auto text-white relative pt-20 md:px-10 px-5 z-20 overflow-hidden">
        <div className="py-10 arsenal_sc_4ec5a515-module__VO5U8q__className">
          <FocusConatiner />
        </div>

        <TechSlider />
      </div>

      <div className="p-4 my-10 gap-5 flex md:flex-row flex-col-reverse items-center justify-center w-full">

        <div className="md:w-1/2 w-fit edu_nsw_act_foundation_1c0be069-module__FSkPZG__className font-semibold z-50">

          <TextContainer text={ "Hey, I'm Ashraful! With 2.5 years of experience as a full-stack developer, I love working with a variety of technologies to build innovative, scalable applications. I’m passionate about staying on top of new trends, and I’ve worked with everything from the MERN stack and Next.js to Nest.js, Three.js, OpenGL, and both SQL and NoSQL databases. I’m always exploring new tools to create efficient, high-performance solutions that solve real-world problems. If you're looking to build something exciting, let’s connect and make it happen! How does that sound?" } />

          {/* learn more button */ }
          <Link href={ "/about" } className="mt-5 block bg-gradient-to-r from-yellow-500 via-cyan-600 via-blue-400 to-green-600 w-[160px] p-[1px] rounded-lg">
            <button className="relative px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg w-full group">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-green-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
              <span className="relative z-10">Learn more!</span>
            </button>
          </Link>
        </div>
        
        <div className="w-ful flex flex-col items-center justify-center gap-3">
          <CardContainer src={ "/photo.jpeg" } name={ "Muhammad Ashraful Alam" } />
          <div className="flex gap-5 relative text-white">
            <Link href="https://github.com" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
              <FaGithub size={ 24 } />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
              <FaLinkedin size={ 24 } />
            </Link>
            <Link href="https://facebook.com/dott.ash" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
              <FaFacebook size={ 24 } />
            </Link>
            <Link href="https://instagram.com/dott.ash" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
              <FaInstagram size={ 24 } />
            </Link>
          </div>
        </div>
      </div>
    </SectionScrollLayout>
  )
};

export default About;