import dynamic from "next/dynamic";

const Aurora = dynamic( () => import( "./Auora" ) );

export default async function AuoraContainer() {
    return (
        <Aurora
            colorStops={ [ "#0e84b2", "#95a69f", "#9d8f9d" ] }
            blend={ 0.05 }
            amplitude={ 0.6 }
            speed={ 1 }
        />
    );
}
