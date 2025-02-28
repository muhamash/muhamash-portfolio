import CompaniesWorked from "@/components/home/clients/Companies";
import States from "@/components/home/clients/States";
import dynamic from "next/dynamic";

const ParticlesContainer = dynamic( () => import( "@/components/animations/bg/particles/ParticlesContainer" ) );

export default async function ExperiencesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 via-gray-800 backdrop-blur-md sticky w-full pt-[100px] px-4 md:px-7 h-screen">
        <div className="absolute -z-20">
          <ParticlesContainer />
        </div>

        <States />

        <div>
        
          <CompaniesWorked />
        </div>
      </div>

      {/* <Footer/> */ }
    </>
  );
}
