import ClientLayout from "@/components/layouts/AboutLayout";

export default async function AboutLayout({profile,experiences, educations, skills, achievements}) {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ClientLayout
          profile={ profile }
          experiences={ experiences }
          educations={ educations }
          skills={ skills }
          achievements={ achievements }
        />
      </div>
    </div>
  );
}
