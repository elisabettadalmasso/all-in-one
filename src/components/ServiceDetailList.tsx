'use client'
import Link from 'next/link'
import useFetch from '@/hooks/useFetch'
import { ServiceDetail } from '@/types/service'

export default function ServiceDetailList() {
  const { data: services, loading, error } = useFetch<ServiceDetail>('/data/servicesDetail.json')

  if (error) return <p>Errore di caricamento...</p>
  if (loading) return <p>Caricamento..</p>

  return (
    <div className="service-complete">
      {services.map((service, index) => (
        <div key={service.id} className="service-card-detail" data-aos="fade-up" data-aos-delay={index * 100}>
          <h2>{service.title}</h2>
          <div className="service-content">
            <picture className="service-photo-small">
              <source srcSet={service.photo} type="image/avif" />
              <img src={service.fallback || service.photo.replace('.avif', '.jpg')} alt={service.title} />
            </picture>
            <div className="service-text">
              {service.isRental === true ? <Link href="/contatti">Contattaci per un preventivo!</Link> : service.fullDescription}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
