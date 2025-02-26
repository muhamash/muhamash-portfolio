import MagnetLines from "./Magnets";

export default async function MagnetsContainer() {
    return (
        <div className="absolute -z-50 bg-black opacity-50 w-screen backdrop-blur-md">
            <MagnetLines
                rows={ 9 }
                columns={ 9 }
                containerSize="60vmin"
                lineColor="tomato"
                lineWidth="0.8vmin"
                lineHeight="5vmin"
                baseAngle={ 0 }
                style={ { margin: "2rem auto" } }
            />
        </div>
    );
}
