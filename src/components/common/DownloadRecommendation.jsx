"use client"

import { downloadRecommendation } from "@/utils/helper/helper";
import { useTransition } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function DownloadRecommendation ()
{
    const [ isPending, startTransition ] = useTransition();

    const handleDownload = () =>
    {
        startTransition( async () =>
        {
            try
            {
                const res = await downloadRecommendation();
        
                if ( !res.success )
                {
                    toast.error('Error!!!!!!!')
                    return;
                }

                const a = document.createElement( "a" );
                a.href = res.data; 
                a.download = "latter.pdf"; 
                document.body.appendChild( a );
                a.click();
                document.body.removeChild( a );
                toast.success('Successfully downloaded!')
            } catch ( error )
            {
                console.error( "Error while downloading latter:", error.message || error );
                alert( "An error occurred while downloading the latter." );
            }
        } );
    };

    return (
        <div className=" bg-gradient-to-r from-sky-600 via-slate-600 to-cyan-600 w-[200px] p-[1px] rounded-lg">
            <button
                onClick={ handleDownload }
                disabled={ isPending }
                className="relative p-3 font-semibold text-white bg-gray-900 rounded-lg w-full group">
                <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-slate-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative z-10">{ isPending ? "working..." : "See Recommendation" }</span>
            </button>
             <Toaster
                position="bottom-right"
                reverseOrder={false}/>
        </div>
    );
}
