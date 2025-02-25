import FuzzyText from "./TextPressure";

export default async function TextPressureContainer() {
    return (
        <FuzzyText
            baseIntensity={ 0.2 }
            hoverIntensity={ 0.5 }
            enableHover={ 10 }
            className={"text-center"}
        >
            See My works!!
        </FuzzyText>
    );
}
