"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const useActivePage = (defaultPage = "profile") => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const getInitialPage = () => {
        return searchParams.get("view") || localStorage.getItem("activePage") || defaultPage;
    };

    const [activePage, setActivePage] = useState(getInitialPage());

    useEffect(() => {
        localStorage.setItem("activePage", activePage);

        const currentParams = new URLSearchParams(window.location.search);
        currentParams.set("view", activePage);
        router.push(`?${currentParams.toString()}`, { scroll: false });
    }, [activePage, router]);

    return [activePage, setActivePage];
};

export default useActivePage;