import Image from "next/image";
import ClientNav from "./ClientNav";

export default async function Nav() {
  return (
    <nav className="fixed  mx-auto top-5 left-0 right-0 flex items-center justify-center z-50 bg-transparent w-full">
      <div className="max-w-6xl mx-auto backdrop-blur-lg bg-gradient-to-r from-gray-900/50 to-gray-700/30 border-b border-white/10 shadow-md shadow-slate-700 rounded-[15px] md:w-full w-2/3 flex items-center justify-center justify-between py-2 px-2 md:px-4">
        <Image
            alt="logo"
            height={ 50 }
            src="/ash.webp"
            width={ 50 }
            className="cursor-pointer rounded-full"
          />


          <ClientNav />
      </div>
    </nav>
  );
}