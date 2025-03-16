import Modal from "@/components/common/Modal";
import dynamic from "next/dynamic";
import VarticalStepper from '../../components/pages/schedule/Stepper.jsx';

const GradContainer = dynamic( () => import( "@/components/animations/gradientText/GradContainer" ) )

export default async function SchedulePage() {
    return (
        <Modal>
            <div className="bg-white text-black md:p-10 p-2 rounded-md">
                <GradContainer
                    showBorder={ true }
                    text={ "😊 Schedule a meeting with me? 😊" }
                    className="px-5 py-2 text-xl md:text-3xl font-arsenal mt-10 mb-5"
                />

                <div>
                    <VarticalStepper />
                </div>
            </div>
        </Modal>
    );
}