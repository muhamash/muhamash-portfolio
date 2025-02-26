import Aurora from "./Auora";

export default function AuoraContainer() {
    return (
        <Aurora
            colorStops={ [ "#0e84b2", "#95a69f", "#8b7c8b" ] }
            blend={ 0.05 }
            amplitude={ 0.5 }
            speed={ 1 }
        />
    );
}
