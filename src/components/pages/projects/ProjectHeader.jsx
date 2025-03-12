import dynamic from "next/dynamic";

const GradContainer = dynamic( () => import( "@/components/animations/gradientText/GradContainer" ) );
const SplitTextContainer = dynamic(() => import("@/components/animations/splitText/SplitTextContainer"));

export default async function ProjectHeader ()
{
    return (
        <div className="flex flex-col gap-7 pt-5 z-20">

            <GradContainer
                showBorder={ true }
                text={ "😊 Meet My Projects 😊" }
                className="px-5 py-2 text-xl md:text-3xl font-arsenal"
            />

            <div className="h-fit max-w-[700px] text-center px-3">
                <p className={ "text-xl font-edu font-bold text-cyan-50" }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis quas aliquam odio vero nesciunt voluptate laboriosam delectus in facere? Tempora accusamus atque dolor, optio nam tenetur consequuntur, voluptate expedita, laboriosam tempore laborum nobis. Architecto, culpa. Nam voluptas enim unde.</p>
            </div>
            
        </div>
    );
}