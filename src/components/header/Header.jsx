"use client"

import CodeEditor from "../home/AnimatedCode";
import AnimatedText from "../home/AnimatedText";

export default function HeaderComponent() {
    return (
        <div className="h-[300px] w-full relative">

             <div className="relative z-10 h-full w-fit flex md:flex-row flex-col justify-between items-center gap-10">
                <div className="w-[300px] md:w-[500px] md:h-fit h-[200px]">
                    <AnimatedText/>
                </div>
                <div>
                    <CodeEditor/>
                </div>
            </div>
        </div>
    );
}
