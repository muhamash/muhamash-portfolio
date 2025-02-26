import MagnetsContainer from "@/components/animations/bg/magnets/MagnetsContainer";
import GradContainer from "@/components/animations/gradientText/GradContainer";
import SectionScrollLayout from "@/components/layouts/SectionScrollLayout";

export default async function Client() {
    return (
        <SectionScrollLayout className={ "min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gradient-to-br from-slate-900 via-gray-800 backdrop-blur-[3px]" }>

            <MagnetsContainer/>
      
            <div className="pt-[110px]">
                <GradContainer
                    showBorder={ true }
                    text={ "Meet my Previous Experiences!!" }
                    className={"px-5 py-2 text-md md:text-xl"}
                />
            </div>


        </SectionScrollLayout>
    );
}
