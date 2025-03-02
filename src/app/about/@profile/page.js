import WaterShader from "@/components/animations/bg/threejs/water/Water";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute">
          <WaterShader/>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-6 text-black">
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Personal Information</h2>
          <p className="text-gray-300"><strong>Name:</strong> John Doe</p>
          <p className="text-gray-300"><strong>Location:</strong> Dhaka, Bangladesh</p>
          <p className="text-gray-300"><strong>Email:</strong> johndoe@example.com</p>
          <p className="text-gray-300"><strong>Phone:</strong> +880 1234-567890</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Social Media Insights</h2>
          <p className="text-gray-300"><strong>Facebook Followers:</strong> 15K</p>
          <p className="text-gray-300"><strong>Instagram Followers:</strong> 8K</p>
          <p className="text-gray-300"><strong>Twitter Engagement:</strong> 5K likes/month</p>
          <p className="text-gray-300"><strong>LinkedIn Connections:</strong> 2K</p>
        </div>
      </div>
    </div>
  );
}