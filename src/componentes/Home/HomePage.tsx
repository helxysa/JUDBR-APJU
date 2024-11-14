import HeroSection from "../HeroSection/HeroSection";
import LaunchJubr from "../LaunchJubr/LaunchJubr";
import Prices from "../Precos/Prices";
import Steps from "../Steps/Steps";
import Section from "../ProntoPraComecar/Section";
import QuemSomos from "../../app/pages/QuemSomos/page";
import Testimonials from "../Testmonials/Testimonials";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import LegalPraticeStats from "../LegalPraticeStats/LegalPraticeStats";
import CTA from "../CTA/CTA";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <LaunchJubr />
            <Steps />
        <Prices />
            <Testimonials />
            <CTA />
            <FrequentlyAsked />
        
            
        </div>
    )
}