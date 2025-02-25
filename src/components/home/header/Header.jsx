import SplitTextContainer from "../../animations/splitText/SplitTextContainer";
import CodeEditor from "../AnimatedCode";
import AnimatedText from "../AnimatedText";

export default function HeaderComponent() {
    return (
        <div className="relative z-10 h-full w-full flex md:flex-row flex-col justify-between items-center gap-10">
            <div className="w-[300px] md:w-[500px] h-fit flex flex-col gap-3 text-left">
                <div className="h-fit">
                    <SplitTextContainer text={ "Assalamu alaikum, I am Md Ashraful Alam" } />
                </div>
                <AnimatedText/>
            </div>
            <CodeEditor />
        </div>
    );
}
