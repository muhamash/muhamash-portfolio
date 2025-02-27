"use client";

import { downloadResume } from "@/utils/helper/helper";
import { useTransition } from "react";
import toast, { Toaster } from 'react-hot-toast';

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
                    toast.error('Error!!!!!!!')
                    return;
                }

                const a = document.createElement( "a" );
                a.href = res.data; 
                a.download = "resume.pdf"; 
                document.body.appendChild( a );
                a.click();
                document.body.removeChild( a );
                toast.success('Successfully downloaded!')
            } catch ( error )
            {
                console.error( "Error while downloading resume:", error.message || error );
                alert( "An error occurred while downloading the resume." );
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
            <div className="font-nunito">
                <Toaster
                position="top-right"
                reverseOrder={false}/>
            </div>
        </div>
    );
}