import CircularGallery from "./CompanyGallery";

export default async function CompanyGalleryConatiner() {
    return (
        <div className="w-full mx-auto">
            <CircularGallery bend={ -50 } textColor="#ffffff" borderRadius={ 0.05 } />
        </div>
    );
}
