"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Sidebar } from "../about/SideBar";

const ClientLayout = ( { profile, experiences, educations, skills, achievements } ) =>
{
    const searchParams = useSearchParams();
    const activeData = searchParams.get( "view" );

    const [ activePage, setActivePage ] = useState( activeData || 'profile' );

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