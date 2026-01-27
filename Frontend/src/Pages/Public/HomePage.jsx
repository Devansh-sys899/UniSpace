import React from "react";
import Navbar from "../../Components/Public/Navbar";
import Hero from "../../Components/Public/Hero";
import CompaniesSection from "../../Components/Public/CompaniesSection";
import FeaturesSection from "../../Components/Public/FeaturesSection";
import ResourceSection from "../../Components/Public/ResourceSection";
import WorkingSection from "../../Components/Public/WorkingSection";
import CTASection from "../../Components/Public/CTASection";
import Footer from "../../Components/Public/Footer";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <CompaniesSection />
            <FeaturesSection />
            <ResourceSection />
            <WorkingSection />
            <CTASection />
            <Footer />
        </div>
    )
}

export default HomePage;