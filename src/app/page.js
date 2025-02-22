import CursorContainer from "@/components/animations/cursor/CursorContainer";
import GridContainer from "@/components/animations/grid/GridContainer";
import HeaderComponent from "@/components/header/Header";
import ServiceSection from "@/components/services/ServiceSection";

export default async function Home() {
  return (
    <div className="pt-[110px] px-3 flex flex-col items-center justify-center">
      <CursorContainer/>
      {/* home bg */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-20">
        <GridContainer/>
      </div>

      <div className="">
        <HeaderComponent/>
      </div>
      <ServiceSection/>
    </div>
  );
}