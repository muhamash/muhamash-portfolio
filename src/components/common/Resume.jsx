"use client";

import { downloadResume } from "@/utils/actions/DownloadResume";
import { useTransition } from "react";

export default function Resume ()
{
    const [ isPending, startTransition ] = useTransition();

    const handleDownload = () =>
    {
        startTransition( async () =>
        {
            try
            {
                const res = await downloadResume();
                if ( !res.success )
                {
                    alert( "Error downloading resume." );
                    return;
                }

                const byteCharacters = atob( res.data );
                const byteNumbers = new Uint8Array( byteCharacters.length );

                for ( let i = 0; i < byteCharacters.length; i++ )
                {
                    byteNumbers[ i ] = byteCharacters.charCodeAt( i );
                }

                const blob = new Blob( [ byteNumbers ], { type: "application/pdf" } );

                const url = window.URL.createObjectURL( blob );
                const a = document.createElement( "a" );
                a.href = url;
                a.download = "resume.pdf";
                document.body.appendChild( a );
                a.click();
                document.body.removeChild( a );
                window.URL.revokeObjectURL( url );
            }
            catch ( error )
            {
                console.error( error || error?.message );
                return null;
            }
        } );
    };

    return (
        <div className=" bg-gradient-to-r from-yellow-500 via-cyan-600 via-blue-400 to-green-600 w-[130px] p-[1px] rounded-lg">
            <button
                onClick={ handleDownload }
                disabled={ isPending }
                className="relative px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg w-full group">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-green-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative z-10">{isPending ? "Downloading..." : "Resume"}</span>
            </button>
        </div>
    );
}