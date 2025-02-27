import dynamic from "next/dynamic";

const SectionScrollLayout = dynamic( () => import( "@/components/layouts/SectionScrollLayout" ) );
const TextPressureContainer = dynamic( () => import( "@/components/animations/stretch/TextPressureContainer" ) );
const MenuContainer = dynamic( () => import( "@/components/animations/glMatrix/MenuContainer" ) );
const NoiseContainer = dynamic( () => import( "@/components/animations/bg/noise/NoiseContainer" ) );

export default async function ProjectSection() {
    return (
        <SectionScrollLayout
            className={ "min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gray-900 p-4" }>
            
            {/* background */ }
            <NoiseContainer />
            <div className="z-50 relative pt-[110px] arsenal_sc_4ec5a515-module__VO5U8q__className">
             <TextPressureContainer/>
            </div>
            <div className="text-white pt-10 outfit_9f52d144-module__aRqVQW__className">
               <MenuContainer/>
            </div>
      
        </SectionScrollLayout>
    );
}
