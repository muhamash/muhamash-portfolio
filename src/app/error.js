'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";


const ErrorPage = ({ error }) => {
    const router = useRouter();
    console.log( error );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-lg mb-8">An unexpected error has occurred. Please try again.</p>
            <div className="flex gap-5 space-x-4">
                <button
                    className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-nunito"
                    onClick={() => router.refresh()}
                >
                    Refresh
                </button>

                <Link href="/"
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-nunito"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;