import Footer from "@/components/home/footer/Footer";
import dynamic from "next/dynamic";

const ClientLayout = dynamic( () => import( '@/components/layouts/AboutLayout' ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function AboutLayout ( { profile, experiences, educations, skills, achievements} )
{ 

  return (
    <>
      <SectionScrollLayout>
        <div className="flex">
          <ClientLayout
            profile={ profile }
            experiences={ experiences }
            educations={ educations }
            skills={ skills }
            achievements={ achievements }
          />
        </div>
      </SectionScrollLayout>
      <Footer />
    </>
  );
}
