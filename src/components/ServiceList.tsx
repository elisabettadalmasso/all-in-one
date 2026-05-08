"use client"

import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import { Service } from "@/types/service";


export default function ServiceList() {
    const { data: services } = useFetch<Service>("/data/services.json");

    return (
        <div className="services">
            {services.map((service, index) => (
                <Link href="/servizi" className="service-card" key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                    <p className="service-icon">{service.icon}</p>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </Link>
            ))}
        </div>
    );
}