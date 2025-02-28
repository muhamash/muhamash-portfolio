import dynamic from "next/dynamic";

const Particles = dynamic( () => import( "./Particles.jsx" ) );

export default async function ParticlesContainer() {
    return (
        <Particles
            particleColors={ [ '#04866c', '#9a9309', '#087421', '#5a068e', '#ffffff', '#e70e0e', '#ab07ab', '#c47021', '#0576aa' ] }
            particleCount={ 200 }
            particleSpread={ 10 }
            speed={ 0.1 }
            particleBaseSize={ 100 }
            moveParticlesOnHover={ true }
            alphaParticles={ false }
            disableRotation={ false }
        />
    );
}
