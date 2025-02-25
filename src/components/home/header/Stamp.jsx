
import
    {
        FaCircle,
        FaFacebookF,
        FaGithub,
        FaInstagram,
        FaLinkedin,
        FaSnapchatGhost,
        FaTiktok,
        FaTwitch,
        FaTwitter,
        FaYoutube
    } from "react-icons/fa";

const ICON_MAPPING = {
  default: FaCircle,
  facebook: FaFacebookF,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  twitter: FaTwitter,
  twitch: FaTwitch,
  youtube: FaYoutube
};

const socialprofils = {
    github: "https://github.com/muhamash",
    facebook: "https://facebook.com/dott.ash",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};

export const Socialicons = ( params ) =>
{
    return (
        <div className="text-white text-sm">
            <ul className="flex flex-col gap-5">
                { Object.entries( socialprofils ).map( ( [ platform, url ] ) =>
                {
                    const IconComponent = ICON_MAPPING[ platform ] || ICON_MAPPING.default;
                    return (
                        <li key={ platform } className="hover:text-gray-400 transition duration-200">
                            <a href={ url } className="flex items-center gap-2">
                                <IconComponent className="text-[16px] hover:text-blue-500 transition duration-300" />
                            </a>
                        </li>
                    );
                } ) }
            </ul>
            <p className="font-mono text-[13px] text-gray-300 -rotate-90 mt-10 -translate-x-[20px] hover:scale-110 transition duration-300">
                Find Me
            </p>
        </div>
    );
};