import dynamic from "next/dynamic";

const SectionScrollLayout = dynamic( () => import( "@/components/layouts/SectionScrollLayout" ) );
const TextPressureContainer = dynamic( () => import( "@/components/animations/stretch/TextPressureContainer" ) );
const MenuContainer = dynamic( () => import( "@/components/animations/glMatrix/MenuContainer" ) );
const NoiseContainer = dynamic( () => import( "@/components/animations/bg/noise/NoiseContainer" ) );

export default async function ProjectSection() {
    return (
        <SectionScrollLayout
            className={ "min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gray-900 p-4 mb-5" }>
            
            {/* background */ }
            <NoiseContainer />
            <div className="z-50 relative pt-[110px] font-font-arsenal">
             <TextPressureContainer/>
            </div>
            <div className="text-white pt-10 font-outfit">
               <MenuContainer/>
            </div>
      
        </SectionScrollLayout>
    );
}