import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function CaroCard({ user }) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 via-black/50 backdrop-blur-md rounded-lg p-6 w-80 border border-white border-opacity-50">
      {/* Profile Section */ }
      <div className="flex items-center justify-between w-full flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            src={ user.image }
            alt={ `${user.name} Avatar` }
            width={ 50 }
            height={ 50 }
            className="w-14 h-14 rounded-full border border-white border-opacity-30"
          />
          <div className="flex flex-col gap-5 text-left">
            <h3 className="text-white text-md font-semibold font-arsenal">{ user.name }</h3>
            <p className="text-gray-300 text-[12px] font-edu font-bold text-violet-200">{ user.position }</p>
          </div>
        </div>

        {/* Social Icons */ }
        <div className="flex gap-3">
          <Link
            href={ user.linkedin }
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={ 20 } />
          </Link>
          <Link
            href={ `mailto:${user.email}` }
            className="text-red-400 hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={ 20 } />
          </Link>
        </div>
      </div>

      {/* Testimonial */ }
      <p className="mt-4 text-violet-100 text-sm font-semibold leading-relaxed font-nunito flex items-start gap-2 relative">
        <FaQuoteLeft className="text-violet-300 text-lg flex-shrink-0" />
        <span className="flex-1">{ user.testimonial }</span>
        <FaQuoteRight className="text-violet-300 text-lg flex-shrink-0 self-end" />
      </p>

    </div>
  );
}