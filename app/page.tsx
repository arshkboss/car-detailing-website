// my-next-app/app/page.tsx
import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import ContactForm from "@/components/sections/ContactForm";

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <WhyChooseUs />
            <Testimonials />
            <Gallery />
            <Location />
            <ContactForm />
        </div>
    );
};

export default Home;