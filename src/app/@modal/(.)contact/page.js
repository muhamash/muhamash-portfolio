import dynamic from "next/dynamic";

const VerticalStepper = dynamic( () => import( "@/components/pages/schedule/Stepper" ) );
const Modal = dynamic( () => import( "@/components/common/Modal" ) );
const GradContainer = dynamic( () => import( "@/components/animations/gradientText/GradContainer" ) )

export default async function ContactPage ()
{
    console.log("intercepted modal : contact page");
    return (
        <Modal>
            <div className="backdrop-blur-md bg-opacity-50 rounded-lg bg-gradient-to-r from-gray-400 via-slate-400 via-gray-500 to-gray-400 text-black text-xl h-full w-full flex flex-col items-center justify-center py-5 z-50  gap-10 md:px-20 px-10 overflow-y-scroll">
                <GradContainer
                    showBorder={ true }
                    text={ "😊 Schedule a meeting with me? 😊" }
                    className="px-5 py-2 text-xl md:text-3xl font-arsenal mt-10 mb-5"
                />

                <div>
                    <VerticalStepper />
                </div>
            </div>
        </Modal>
    );
}