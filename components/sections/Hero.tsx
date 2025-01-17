// my-next-app/app/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-gray-900 bg-opacity-80 backdrop-blur-lg h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-4xl md:text-6xl text-red-600 font-bold mb-4">Revive Your Ride</h2>
                <p className="text-white text-lg md:text-xl mb-8">Premium car detailing services to make your vehicle shine.</p>
                <a href="#services" className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                    Explore Services
                </a>
            </div>
        </section>
    );
};

export default Hero;