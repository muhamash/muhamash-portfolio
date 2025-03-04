import CardContainer from "@/components/animations/TiledCard/CardContainer";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default async function AboutPhoto() {
    return (
        <div className="w-ful flex flex-col items-center justify-center gap-3">
            <CardContainer src={ "/photo.jpeg" } name={ "Muhammad Ashraful Alam" } />
            <div className="flex gap-5 relative text-white">
                <Link href="https://github.com/muhamash" className="hover:text-green-400 hover:scale-110 transition-all duration-150">
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
        </div>
    );
}