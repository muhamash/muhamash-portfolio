"use client"

import SplitText from "./SplitText";

// const handleAnimationComplete = () => {
//   console.log('All letters have animated!');
// };


export default function SplitTextContainer({text, delay = 150}) {
    return (
        <SplitText
            text={text}
            className="md:text-4xl text-2xl font-semibold font-arsenal"
            delay={ delay }
            animationFrom={ { opacity: 0, transform: 'translate3d(0,50px,0)' } }
            animationTo={ { opacity: 1, transform: 'translate3d(0,0,0)' } }
            easing="easeOutCubic"
            threshold={ 0.2 }
            rootMargin="-50px"
            // onLetterAnimationComplete={ handleAnimationComplete }
        />
    );
}