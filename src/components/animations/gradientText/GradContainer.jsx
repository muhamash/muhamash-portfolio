import GradientText from "./Grad";

export default async function GradContainer ( { text, showBorder = false, speed = 2, className } )
{
    return (
        <GradientText
            colors={ [ "#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa" ] }
            animationSpeed={ speed }
            showBorder={ showBorder }    
            className={className}
        >
            { text }
        </GradientText>
    );
}
