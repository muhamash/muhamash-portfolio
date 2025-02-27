import CircularGallery from "./CompanyGallery";

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
        <div className="w-full mx-auto outfit_9f52d144-module__aRqVQW__className">
            <CircularGallery items={myItems} bend={ -50 } textColor="#ffffff" borderRadius={ 0.05 } />
        </div>
    );
}
