import HeroSection from "../HeroSection/HeroSection";
import LaunchJubr from "../LaunchJubr/LaunchJubr";
import Prices from "../Precos/Prices";
import Steps from "../Steps/Steps";
import Section from "../ProntoPraComecar/Section";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <LaunchJubr />
            <Steps />
            <Prices />
            <Section />
        </div>
    )
}