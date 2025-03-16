import dynamic from "next/dynamic";
import HireMeForm from "./HireMeForm";

const GradContainer = dynamic( () => import( "@/components/animations/gradientText/GradContainer" ) );

export default async function HireMe() {
  return (
    <div className="md:w-1/2 w-full h-full md:p-0 py-[100px]">
      {/* <BackButton /> */}

      <GradContainer
        showBorder={ true }
        text={ "😊 Let's work together 😊" }
        className="px-5 py-2 text-xl md:text-3xl font-arsenal mt-10 mb-5"
      />
      <HireMeForm />
    </div>
  );
};