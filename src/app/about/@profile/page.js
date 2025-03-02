import WaterConatainer from "@/components/animations/bg/threejs/water/water/water/WaterConatainer";
import AboutPhoto from "@/components/home/about/AboutPhoto";

export default async function AboutPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full bg-black text-white md:py-20 pt-[100px] px-5">
      <WaterConatainer />
      
      <div className="relative z-10 max-w-5xl w-full">
        <div className="my-5">
          <AboutPhoto />
        </div>

        <div className="relative w-full">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-semibold text-violet-800 font-edu">Md Ashraful Alam</h1>
            <p className="text-xl text-violet-200 font-arsenal font-bold">Full-Stack Software Engineer || MERN Stack Expert</p>
          </div>
        </div>

        <p className="text-xl font-bold text-violet-100 font-edu">Hey, I&#39;m Ashraful! With 2.5 years of experience as a full-stack developer, I love working with a variety of technologies to build innovative, scalable applications. I’m passionate about staying on top of new trends, and I’ve worked with everything from the MERN stack and Next.js to Nest.js, Three.js, OpenGL, and both SQL and NoSQL databases. I’m always exploring new tools to create efficient, high-performance solutions that solve real-world problems. If you&#39;re looking to build something exciting, let’s connect and make it happen! How does that sound?</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-6 text-black py-10">

        <div className="bg-gray-100 backdrop-blur-sm bg-opacity-20 flex flex-col items-center justify-center p-5 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-violet-800 mb-3 font-arsenal">Personal Information</h2>
          <p className="text-gray-300 font-nunito"><strong>Name:</strong> Md Ashraful Alam</p>
          <p className="text-gray-300"><strong>Location:</strong> Dhaka, Bangladesh</p>
          <p className="text-gray-300"><strong>Phone:</strong> +880 1306567164</p>
          <p className="text-gray-300"><strong>Email:</strong> muhammad-ashrafull@outlook.com</p>
        </div>

        <div className="bg-gray-100 backdrop-blur-sm bg-opacity-20 flex flex-col items-center justify-center p-5 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-violet-800 mb-3 font-arsenal">Professional Insights</h2>
          <p className="text-gray-300 text-md font-nunito mb-5 text-center leading-relaxed">
            Gain valuable insights into the latest trends and tips to advance your career in the tech industry.
            Explore best practices, expert advice, and in-depth analyses to stay ahead in the fast-paced world of technology.
          </p>
        </div>
      </div>
    </div>
  );
}