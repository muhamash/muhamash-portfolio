import dynamic from "next/dynamic";

const ParticlesContainer = dynamic( () => import( "@/components/animations/bg/particles/ParticlesContainer" ) );
const GradContainer = dynamic( () => import( "@/components/animations/gradientText/GradContainer" ) );
const SectionScrollLayout = dynamic( () => import( "@/components/layouts/SectionScrollLayout" ) );
const CompanyGalleryConatiner = dynamic( () => import( "./CompanyGalleryConatiner" ) );
const MeetingButton = dynamic( () => import( "@/components/common/MeetingButton" ) );
const States = dynamic( () => import( "./States" ) );

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
                    showBorder={ true }
                    text={ "Meet My Experiences!" }
                    className="px-5 py-2 text-xl md:text-3xl arsenal_sc_4ec5a515-module__VO5U8q__className"
                />

                {/* Stats Section */ }
                <div className="flex flex-col justify-center items-center justify-between gap-10 w-full">
                    <States />


                    <GradContainer
                        showBorder={ false }
                        text={ "Organizations I've Engaged With!!" }
                        className="px-5 py-2 text-xl md:text-3xl arsenal_sc_4ec5a515-module__VO5U8q__className"
                    />

                    <CompanyGalleryConatiner />
                </div>
                <div className="flex items-center justify-center edu_nsw_act_foundation_1c0be069-module__FSkPZG__className font-semibold">
                    <MeetingButton/>
                </div>
            </div>
        </SectionScrollLayout>
    );
}