import AuoraContainer from "@/components/animations/bg/auora/AuoraContainer";
import FocusConatiner from "@/components/animations/focusText/FocusConatiner";
import TechSlider from "@/components/animations/sliders/techStacks/TechSlider";
import SectionScrollLayout from "@/components/layouts/SectionScrollLayout";

const About = async() => 
{
  return (
    <SectionScrollLayout
      className={ "min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gradient-to-br from-slate-900 via-gray-800 backdrop-blur-[3px]" }
    >
      <AuoraContainer />

      <div className="max-w-6xl mx-auto text-white relative pt-20 md:px-10 px-5">
        <div className="py-10">
          <FocusConatiner/>
        </div>

         <TechSlider/>
      </div>

      <p className="text-white"> working on!!! it is under construction</p>
      <p className="text-white"> working on!!! it is under construction</p>
      <p className="text-white"> working on!!! it is under construction</p>
      <p className="text-white"> working on!!! it is under construction</p>

    </SectionScrollLayout>
  )
};

export default About;