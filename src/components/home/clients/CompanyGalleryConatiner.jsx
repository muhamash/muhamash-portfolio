import dynamic from "next/dynamic";

const CircularGallery = dynamic( () => import( "./CompanyGallery" ) );

const myItems = [
    { image: `/logos/electro-world.jpg`, text: 'Electro tech-world' },
    { image: `/logos/eventsparklogo-01.png`, text: 'My EventSpark' },
    { image: `/logos/kubec.png`, text: 'KBEC' },
    { image: `/logos/reneta.png`, text: 'Renata' },
    { image: `/logos/electro-world.jpg`, text: 'Electro tech-world' },
    { image: `/logos/rucc.jpg`, text: 'RUCC' },
    { image: `/logos/electro-world.jpg`, text: 'Electro tech-world' },
    { image: `/logos/eventsparklogo-01.png`, text: 'My EventSpark' },
    { image: `/logos/xpeedlab.jpg`, text: 'XpeedLab' },
    { image: `/logos/designLadder.jpeg`, text: 'DesignLadder' },
];

export default async function CompanyGalleryConatiner() {
    return (
        <div className="w-full mx-auto font-outfit">
            <CircularGallery items={myItems} bend={ -50 } textColor="#ffffff" borderRadius={ 0.05 } />
        </div>
    );
}
