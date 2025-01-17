// my-next-app/app/components/Gallery.tsx
import React from "react";

const Gallery: React.FC = () => {
    return (
        <section className="bg-gray-200 py-20" id="gallery">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img src="/images/car1.jpg" alt="Car Detail 1" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="/images/car2.jpg" alt="Car Detail 2" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="/images/car3.jpg" alt="Car Detail 3" className="w-full h-auto rounded-lg shadow-md" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;