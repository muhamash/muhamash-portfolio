import dynamic from "next/dynamic";
import Link from "next/link";

const AboutPhoto = dynamic( () => import( "./AboutPhoto" ) );
const SectionScrollLayout = dynamic( () => import( "@/components/layouts/SectionScrollLayout" ) );
const TechSlider = dynamic( () => import( "@/components/animations/sliders/techStacks/TechSlider" ) );
const FocusConatiner = dynamic( () => import( "@/components/animations/focusText/FocusConatiner" ) );
const TextContainer = dynamic( () => import( "@/components/animations/depcretedText/TextContainer" ) );
const AuoraContainer = dynamic( () => import( "@/components/animations/bg/auora/AuoraContainer" ) );

const About = async () => 
{
  return (
    <SectionScrollLayout
      className={ "min-h-screen min-w-screen sticky top-0 left-0 right-0 z-20 w-full bg-gradient-to-br from-slate-900 via-gray-800 backdrop-blur-md" }
    >
      <AuoraContainer />

      <div className="max-w-6xl mx-auto text-white relative pt-20 md:px-10 px-5 z-20 overflow-hidden">
        <div className="py-10 font-arsenal">
          <FocusConatiner />
        </div>

        <TechSlider />
      </div>

      <div className="p-4 my-10  flex md:flex-row flex-col-reverse items-center gap-5 justify-around justify-center w-full">

        <div className="md:w-fit w-fit font-edu font-semibold z-50">

          <TextContainer text={ "Hey, I'm Ashraful! With 2.5 years of experience as a full-stack developer, I love working with a variety of technologies to build innovative, scalable applications. I’m passionate about staying on top of new trends, and I’ve worked with everything from the MERN stack and Next.js to Nest.js, Three.js, OpenGL, and both SQL and NoSQL databases. I’m always exploring new tools to create efficient, high-performance solutions that solve real-world problems. If you're looking to build something exciting, let’s connect and make it happen! How does that sound?" } />

          {/* learn more button */ }
          <Link href={ "/about?view=skills" } className="mt-5 block bg-gradient-to-r from-yellow-500 via-cyan-600 via-blue-400 to-green-600 w-[160px] p-[1px] rounded-lg">
            <button className="relative px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg w-full group">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-green-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
              <span className="relative z-10">Learn more!</span>
            </button>
          </Link>
        </div>
        
        {/* image */ }
        <AboutPhoto/>
      </div>
    </SectionScrollLayout>
  )
};

export default About;