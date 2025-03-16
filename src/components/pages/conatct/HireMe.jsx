import BackButton from "@/components/common/BackButton";
import dynamic from "next/dynamic";
import HireMeForm from "./HireMeForm";

const GradContainer = dynamic( () => import( "@/components/animations/gradientText/GradContainer" ) );

export default async function HireMe() {
  return (
    <div className="md:w-1/2 w-full h-screen md:p-0 md:py-[120px] relative md:overflow-y-scroll md:pb-[20px] py-[100px]">
      <div className="absolute md:-top-2 top-20 md:left-1 -left-1">
        <BackButton />
      </div>

      <GradContainer
        showBorder={ true }
        text={ "😊 Let's work together 😊" }
        className="px-5 py-2 text-xl md:text-3xl font-arsenal mt-10 mb-5"
      />
      <HireMeForm />
    </div>
  );
};