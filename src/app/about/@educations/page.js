import App from "@/components/animations/bg/threejs/water/water/cosmic/Cosmic";

export default async function EducationsPage() {
  return (
    <div className="relative">
      <div>
        <div className="relative opacity-30 w-screen h-screen">
          <App/>
        </div>

        {/* Glass overlay */}
        <div className="absolute inset-0  backdrop-blur-lg z-10" />
      </div>
    </div>
  );
}
