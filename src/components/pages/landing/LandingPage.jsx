import ParticlesContainer from "@/components/animations/bg/particles/ParticlesContainer";
import ScrollBar from "@/components/common/ScrollBar";
import About from "../home/about/About";
import Welcome from "../home/welcome/Welcome";

export const dynamic = "force-static";

export default async function LandingPage ()
{
    return (
        <div className="relative">
            <ScrollBar />
          
            <div className="fixed inset-0 w-full h-full overflow-hidden z-20">
                <ParticlesContainer/>
            </div>


            {/* welcome section */ }
            <Welcome />
            
            <div id="next-section">
                <About/>
            </div>
        </div>
    );
}