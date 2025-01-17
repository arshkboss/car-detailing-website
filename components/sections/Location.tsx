// my-next-app/app/components/Location.tsx
import React from 'react';

const Location: React.FC = () => {
    return (
        <section className="bg-gray-300 py-20" id="location">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                <p className="text-gray-700 mb-4">Visit us at:</p>
                <p className="text-lg font-semibold">123 Detail St, Car City, CA 12345</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2sMafia%20Detailers!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="mx-auto"
                ></iframe>
            </div>
        </section>
    );
};

export default Location;