"use client";

import StarsAnimation from "./Star";

const StarsAnimation = dynamic( () => import( '../components/StarsAnimation' ), {
    ssr: false
} );

export default function StarConatiner() {
    return (
        <div>
            <StarsAnimation />
        </div>
    );
}
