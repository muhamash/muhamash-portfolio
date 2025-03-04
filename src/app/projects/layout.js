import Footer from "@/components/pages/home/footer/Footer";
import dynamic from "next/dynamic";

const ClientLayout = dynamic( () => import( '@/components/layouts/AboutLayout' ) );
const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );

export default async function ProjectLayout ( { children } )
{
  return (
    <>
      <SectionScrollLayout>{ children }</SectionScrollLayout>
      <Footer/>
    </>
  );
}