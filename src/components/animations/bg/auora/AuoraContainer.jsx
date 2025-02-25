import Aurora from "./Auora";

export default function AuoraContainer() {
    return (
        <Aurora
            colorStops={ [ "#0e84b2", "#0a933f", "#940a99" ] }
            blend={ 0.1 }
            amplitude={ 0.5 }
            speed={ 0.8 }
        />
    );
}
