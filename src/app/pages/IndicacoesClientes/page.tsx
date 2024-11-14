import Testimonials from "@/componentes/Testmonials/Testimonials";
import CTA from "@/componentes/CTA/CTA";
import FrequentlyAsked from "@/componentes/FrequentlyAsked/FrequentlyAsked";
import LegalPracticeStats
 from "@/componentes/LegalPraticeStats/LegalPraticeStats";

 
 export default function IndicacoesClientes() {
    return (
        <div className="mt-10 md:mt-0">
            <Testimonials />
            <LegalPracticeStats />
            <FrequentlyAsked />
        </div>
    )
}