"use client"

import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import { Work } from "@/types/service";


export default function WorksGrid() {
     const { data: works } = useFetch<Work>("/data/works.json");

     return(
         <div className="works-grid">
                {works.map((work, index) => (
                    <Link href="/eventi" key={work.id} className="work-card" data-aos="flip-left" data-aos-delay={index * 100}>
                        <picture>
                            <source srcSet={work.photo} type="image/avif" />
                            <img
                                src={work.fallback || work.photo.replace('.avif', '.jpg')}
                                alt={work.title}
                                style={{ objectPosition: work.position }}
                            />
                        </picture>
                        <div className="work-overlay">
                            <p>{work.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
     )
}