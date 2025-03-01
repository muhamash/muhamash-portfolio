import { FaBriefcase, FaGraduationCap, FaTools, FaTrophy, FaUser } from "react-icons/fa";

const icons = {
    profile: <FaUser className="w-5 h-5 mr-3" />,
    experiences: <FaBriefcase className="w-5 h-5 mr-3" />,
    educations: <FaGraduationCap className="w-5 h-5 mr-3" />,
    skills: <FaTools className="w-5 h-5 mr-3" />,
    achievements: <FaTrophy className="w-5 h-5 mr-3" />,
};

export const NavLinks = ({ activePage, setActivePage, closeDrawer }) => (
    <nav className="space-y-2 font-arsenal">
        {["profile", "experiences", "educations", "skills", "achievements"].map((item) => (
            <button
                key={item}
                onClick={() => {
                    setActivePage(item);
                    if (closeDrawer) closeDrawer();
                }}
                className={`flex items-center p-3 w-full text-left rounded-md transition-all duration-300 ${
                    activePage === item
                        ? "bg-slate-700 text-green-400 shadow-sm shadow-green-300"
                        : "text-white/80 hover:bg-white/20"
                }`}
            >
                {icons[item]}
                {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
        ))}
    </nav>
);