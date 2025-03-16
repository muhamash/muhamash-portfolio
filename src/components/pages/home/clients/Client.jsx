import CaroSlide from "@/components/common/custom/CaroSlide";
import dynamic from "next/dynamic";

const ParticlesContainer = dynamic( () => import( "@/components/animations/bg/particles/ParticlesContainer" ) );
const GradContainer = dynamic( () => import( "@/components/animations/gradientText/GradContainer" ) );
const SectionScrollLayout = dynamic( () => import( "@/components/layouts/SectionScrollLayout" ) );
const CompanyGalleryConatiner = dynamic( () => import( "./CompanyGalleryConatiner" ) );
const MeetingButton = dynamic( () => import( "@/components/common/MeetingButton" ) );
const States = dynamic( () => import( "./States" ) );
const DownloadRecommendation = dynamic(()=> import("@/components/common/DownloadRecommendation"))

export default async function Client() {
    return (
        <SectionScrollLayout className="min-h-screen min-w-screen sticky top-0 z-20 w-full bg-gradient-to-br from-slate-900 via-gray-900 backdrop-blur-md px-4 pb-[30px]">
            {/* Background Animation */ }
            <div className="absolute -z-20">
                <ParticlesContainer />
            </div>

            {/* Content */ }
            <div className="pt-[100px] text-center z-20">
                <GradContainer
                    text={ "Meet My Experiences!" }
                    className="px-5 py-2 text-xl md:text-3xl font-arsenal"
                />

                {/* Stats Section */ }
                <div className="flex flex-col justify-center items-center justify-between gap-10 w-full relative">
                    <States />


                    <GradContainer
                        showBorder={ true }
                        text={ "😍 My beloved people!! 😍" }
                        className="px-5 py-2 text-xl md:text-3xl font-arsenal"
                    />

                    <div className="w-screen h-full">
                        <CaroSlide/>
                   </div>
                </div>
                <div className="flex flex-wrap-reverse items-center gap-5 justify-center font-edu font-semibold my-5 pt-10">
                    <MeetingButton />
                    <DownloadRecommendation/>
                </div>
            </div>
        </SectionScrollLayout>
    );
}