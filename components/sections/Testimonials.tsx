// my-next-app/app/components/Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section className="bg-gray-300 py-20" id="testimonials">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
                <div className="flex flex-col space-y-4">
                    <blockquote className="italic">"Mafia Detailers transformed my car! Highly recommend!" - John D.</blockquote>
                    <blockquote className="italic">"Exceptional service and attention to detail." - Sarah K.</blockquote>
                    <blockquote className="italic">"My car has never looked better!" - Mike L.</blockquote>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;