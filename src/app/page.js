import CodeEditor from "@/components/home/AnimatedCode";
import AnimatedText from "@/components/home/AnimatedText";

export default function Home() {
  return (
    <div className="pt-[110px]">
      <div className="flex gap-10">
        <div className="w-1/2">
          <AnimatedText />
        </div>
        <div className="w-1/2">
          <CodeEditor/>
        </div>
      </div>
    </div>
  );
}