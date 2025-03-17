import Image from "next/image";

export default function CaroCard ()
{
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 via-black/50 backdrop-blur-md rounded-lg p-6 w-80 border border-white border-opacity-50">
      <div className="flex items-center gap-3">
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
          width={ 50 }
          height={ 50 }
          className="w-12 h-12 rounded-full border border-white border-opacity-30"
        />
        <div>
          <h3 className="text-white text-lg font-semibold text-left font-arsenal">John Doe</h3>
          <p className="text-gray-300 text-sm font-nunito">CTO || demo company</p>
        </div>
      </div>
      <p className="mt-4 text-violet-100 text-sm font-semibold font-code">
        "This product is absolutely amazing! The quality is top-notch, and the experience has been seamless. Highly recommend!"
        "This product is absolutely amazing! The quality is top-notch, and the experience has been seamless. Highly recommend!"
      </p>
        
    </div>
  );
}