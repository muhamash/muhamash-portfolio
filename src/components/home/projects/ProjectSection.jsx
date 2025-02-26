import NoiseContainer from "@/components/animations/bg/noise/NoiseContainer";
import MenuContainer from "@/components/animations/glMatrix/MenuContainer";
import TextPressureContainer from "@/components/animations/stretch/TextPressureContainer";
import SectionScrollLayout from "@/components/layouts/SectionScrollLayout";

export default async function ProjectSection() {
    return (
        <SectionScrollLayout
            className={ "min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gray-900 px-4" }>
            
            {/* background */ }
            <NoiseContainer />
            <div className="z-50 relative pt-[110px]">
             <TextPressureContainer/>
            </div>
            <div className="text-white pt-10">
               <MenuContainer/>
            </div>
      
        </SectionScrollLayout>
    );
}
