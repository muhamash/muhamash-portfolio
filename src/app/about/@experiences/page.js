import CompaniesWorked from "@/components/home/clients/Companies";
import States from "@/components/home/clients/States";
import dynamic from "next/dynamic";

const ParticlesContainer = dynamic( () => import( "@/components/animations/bg/particles/ParticlesContainer" ) );

export default async function ExperiencesPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-800 backdrop-blur-md min-h-screen sticky top-0 w-full pt-[100px] px-4 md:px-7 -z-20 py-10">
      <div className="absolute -z-50">
        <ParticlesContainer />
      </div>

      <States />

      <div>
        <CompaniesWorked />
      </div>
    </div>
  );
}
