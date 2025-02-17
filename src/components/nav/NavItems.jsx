"use client";

export const NavItem = ({ icon, text }) => {
    return (
        <li className="relative flex items-center text-white font-medium cursor-pointer group">
            {icon}
        </li>
    );
};