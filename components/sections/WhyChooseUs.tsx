// my-next-app/app/components/WhyChooseUs.tsx
import React from 'react';

const WhyChooseUs: React.FC = () => {
    return (
        <section className="bg-gray-200 py-20" id="why-choose-us">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <p className="text-gray-700 mb-4">We provide top-notch car detailing services with a focus on quality and customer satisfaction.</p>
                <ul className="list-disc list-inside text-left mx-auto max-w-lg">
                    <li>Experienced professionals</li>
                    <li>Eco-friendly products</li>
                    <li>Customizable packages</li>
                    <li>100% satisfaction guarantee</li>
                </ul>
            </div>
        </section>
    );
};

export default WhyChooseUs;