"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Sidebar } from "../pages/about/SideBar";

const ClientLayout = ({ profile, experiences, educations, skills, achievements }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const activePage = searchParams.get("view") || localStorage.getItem("activePage") || "profile";

    useEffect(() => {
        // Store in localStorage to persist across refreshes
        localStorage.setItem("activePage", activePage);
    }, [activePage]);

    const handlePageChange = (page) => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.set("view", page);
        router.push(`?${currentParams.toString()}`, { scroll: false });
    };

    return (
        <>
            <Sidebar activePage={activePage} setActivePage={handlePageChange} />
            {activePage === "profile" && profile}
            {activePage === "experiences" && experiences}
            {activePage === "educations" && educations}
            {activePage === "skills" && skills}
            {activePage === "achievements" && achievements}
        </>
    );
};

export default ClientLayout;