"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Sidebar } from "../about/SideBar";

const ClientLayout = ( { profile, experiences, educations, skills, achievements } ) =>
{
    const searchParams = useSearchParams();
    const router = useRouter();

    const getInitialPage = () =>
    {
        return searchParams.get( "view" ) || localStorage.getItem( "activePage" ) || "profile";
    };

    const [ activePage, setActivePage ] = useState( getInitialPage() );

    useEffect( () =>
    {
        localStorage.setItem( "activePage", activePage );

        const currentParams = new URLSearchParams( window.location.search );
        currentParams.set( "view", activePage );
        router.push( `?${currentParams.toString()}`, { scroll: false } );

    }, [ activePage, router ] );

    return (
        <>
            <Sidebar activePage={ activePage } setActivePage={ setActivePage } />
            { activePage === "profile" && profile }
            { activePage === "experiences" && experiences }
            { activePage === "educations" && educations }
            { activePage === "skills" && skills }
            { activePage === "achievements" && achievements }
        </>
    );
};

export default ClientLayout;