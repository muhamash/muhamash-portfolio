export default function GradContainer({text , showBorder = false, speed = 2}) {
    return (
        <GradientText
            colors={ [ "#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa" ] }
            animationSpeed={ speed }
            showBorder={ showBorder }
            className="custom-class"
        >
            { text }
        </GradientText>
    );
}
