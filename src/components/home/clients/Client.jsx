import ParticlesContainer from "@/components/animations/bg/particles/ParticlesContainer";
import GradContainer from "@/components/animations/gradientText/GradContainer";
import MeetingButton from "@/components/common/MeetingButton";
import SectionScrollLayout from "@/components/layouts/SectionScrollLayout";
import CompanyGalleryConatiner from "./CompanyGalleryConatiner";
import States from "./States";

export default async function Client() {
    return (
        <SectionScrollLayout className="min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gradient-to-br from-slate-900 via-gray-900 backdrop-blur-md px-4 pb-5">
            {/* Background Animation */ }
            <div className="absolute -z-20">
                <ParticlesContainer />
            </div>

            {/* Content */ }
            <div className="pt-[100px] text-center z-20">
                <GradContainer
                    showBorder={ true }
                    text={ "Meet My Experiences!" }
                    className="px-5 py-2 text-xl md:text-3xl"
                />

                {/* Stats Section */ }
                <div className="flex flex-col justify-center items-center justify-between gap-10 w-full">
                    <States />


                    <GradContainer
                        showBorder={ false }
                        text={ "Companies I have been with!!" }
                        className="px-5 py-2 text-xl md:text-3xl"
                    />

                    <CompanyGalleryConatiner />
                </div>
                <div className="flex items-center justify-center">
                    <MeetingButton/>
                </div>
            </div>
        </SectionScrollLayout>
    );
}