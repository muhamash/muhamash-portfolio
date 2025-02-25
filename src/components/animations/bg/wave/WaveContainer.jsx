"use client"

import Threads from "./Wave";

export default function WaveContainer() {
    return (
        <div className="bg-black" style={ { width: '100%', height: '100%', position: 'absolute' } }>
            <Threads
                amplitude={ 1 }
                distance={ 0 }
                enableMouseInteraction={ true }
            />
        </div>
    );
}
