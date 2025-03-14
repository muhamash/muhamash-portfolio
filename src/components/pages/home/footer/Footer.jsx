import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';

const SectionScrollLayout = dynamic( () => import( "@/components/layouts/SectionScrollLayout" ) );

export default async function Footer() {
    return (
        <SectionScrollLayout className="w-full h-min-screen z-40 bg-gradient-to-br from-slate-900 via-gray-900 via-black/50 backdrop-blur-lg text-white px-4 md:px-[50px] min-w-screen flex md:flex-row flex-col md:justify-between justify-center md:items-end items-center gap-10 mx-auto py-[20px] md:py-[80px] shadow-lg hover:shadow-2xl hover:shadow-white shadow-rose-200">
            <div className="flex flex-col items-center md:items-start gap-5">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <Image
                        className="bg-rose-300 rounded-md shadow-lg shadow-slate-500 cursor-pointer hover:scale-150 hover:shadow-md duration-300 transition-all"
                        src={ "/logo.png" }
                        height={ 100 }
                        width={ 60 }
                        alt="logo?"
                    />
                    <p className="uppercase font-bold font-arsenal text-[20px] md:text-[25px] text-cyan-200">Free Palastine</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-center md:text-left font-nunito ">For inquiries, contact me at:</p>
                    <a href="tel:+8801306567164" className="flex items-center gap-2 text-violet-400 hover:text-violet-300 font-outfit mx-auto md:mx-0">
                        <FaPhone /> +8801306567164
                    </a>
                    <a href="mailto:muhammad-ashraful@outlook.com" className="flex items-center gap-2 text-violet-400 hover:text-violet-300 font-outfit">
                        <FaEnvelope /> muhammad-ashraful@outlook.com
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
                <h3 className="text-xl font-semibold md:text-left text-center font-arsenal">Quick Links</h3>
                <ul className="text-center flex  gap-1 flex-col md:text-left font-outfit">
                    <li><Link href="/about?view=profile" className="hover:text-violet-400">About</Link></li>
                    <li className="w-full"><Link href="/privacy" className="hover:text-violet-400">Privacy and policy</Link></li>
                    <li className="w-full"><Link href="/terms" className="hover:text-violet-400">Terms & conditions</Link></li>
                </ul>
            </div>

            <div className="flex flex-col md:items-end items-center md:pt-0 pt-10">
                <div className="flex gap-6">
                    <Link href="https://github.com" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
                        <FaGithub size={ 24 } />
                    </Link>
                    <Link href="https://linkedin.com" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
                        <FaLinkedin size={ 24 } />
                    </Link>
                    <Link href="https://facebook.com/dott.ash" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
                        <FaFacebook size={ 24 } />
                    </Link>
                    <Link href="https://instagram.com/dott.ash" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
                        <FaInstagram size={ 24 } />
                    </Link>
                </div>

                <div className="mt-6 text-center flex flex-wrap md:py-0 py-5 gap-1 items-center font-mono font-code">
                    <p className="md:text-sm text-[10px]">© Md Ashraful Alam ;</p>
                    <Link className="text-violet-300 text-[15px] font-code font-bold" href={ "https://github.com/muhamash" }>github.com/muhamash,</Link>
                    <span className="md:text-sm text-[10px] font-code"> All rights reserved.</span>
                </div>
            </div>
        </SectionScrollLayout>
    );
}