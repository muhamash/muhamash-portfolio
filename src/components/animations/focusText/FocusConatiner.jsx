import dynamic from "next/dynamic";

const TrueFocus = dynamic( () => import( "./Focus" ) );

export default  function FocusConatiner() {
    return (
        <TrueFocus
            sentence="Searching for the best one?"
            manualMode={ false }
            blurAmount={ 5 }
            borderColor="green"
            animationDuration={ 0.9 }
            pauseBetweenAnimations={ 1 }
        />
    );
}
