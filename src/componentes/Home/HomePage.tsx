import HeroSection from "../HeroSection/HeroSection";
import LaunchJubr from "../LaunchJubr/LaunchJubr";
import Prices from "../Precos/Prices";
import Steps from "../Steps/Steps";
import Section from "../ProntoPraComecar/Section";
import QuemSomos from "../../app/pages/QuemSomos/page";
import Testimonials from "../Testmonials/Testimonials";
export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <LaunchJubr />
            <Steps />
        <Prices />
            <Section />
            <QuemSomos />
            <Testimonials />
        </div>
    )
}