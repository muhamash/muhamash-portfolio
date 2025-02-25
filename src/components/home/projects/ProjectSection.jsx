import NoiseContainer from "@/components/animations/bg/noise/NoiseContainer";
import TextPressureContainer from "@/components/animations/stretch/TextPressureContainer";
import SectionScrollLayout from "@/components/layouts/SectionScrollLayout";

export default async function ProjectSection() {
    return (
        <SectionScrollLayout
            className={ "min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gray-900 px-4" }>
            
            {/* background */ }
            <div className=" -z-20  pt-[100px]">
                <NoiseContainer />
                
                <div className="absolute z-50">
                    
                    <TextPressureContainer/>
                </div> 
            </div>
      
        </SectionScrollLayout>
    );
}
