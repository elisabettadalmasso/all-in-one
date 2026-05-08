import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceDetailList from "@/components/ServiceDetailList";
import BrandSection from "@/components/BrandSection";
import "./Servizi.css";

export const metadata: Metadata = {
  title: "Servizi | All In One S.n.c.",
  description: "Audio, luci, video e strutture per eventi: noleggio e gestione tecnica professionale in Piemonte.",
};

export default function ServicesPage() {
  return (
    <div className="page-container">
      <Hero
        className="service-hero"
        badge="ALL IN ONE"
        titleAos="fade-up"
        titleDelay="200"
        title="I Nostri Servizi"
        description="Non ci vedrai sul palco ma sentirai la differenza. Tecnologia d'eccellenza, brand leader del settore."
      />
      <ServiceDetailList />
      <BrandSection />
    </div>
  );
}