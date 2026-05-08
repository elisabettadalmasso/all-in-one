'use client'
import { useState } from 'react'
import useFetch from '@/hooks/useFetch'
import { Brand } from '@/types/service'

export default function BrandSection() {
  const { data: brands } = useFetch<Brand>('/data/brand.json')
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filters = [
    { value: 'all', label: 'Tutti' },
    { value: 'audio', label: 'Audio' },
    { value: 'lights', label: 'Luci' },
    { value: 'video', label: 'Video' },
    { value: 'structures', label: 'Strutture' },
    { value: 'electricity', label: 'Distribuzione Elettrica' },
  ]

  return (
    <section className="brand-section">
      <h2 data-aos="fade-up">I nostri brand</h2>

      <div className="brand-filter" data-aos="fade-up" data-aos-delay="100">
        {filters.map((f) => (
          <button key={f.value} onClick={() => setActiveFilter(f.value)} className={activeFilter === f.value ? 'active' : ''}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="brand-grid" data-aos="fade-up" data-aos-delay="200">
        {brands
          .filter((b) => activeFilter === 'all' || b.category.split(',').includes(activeFilter))
          .map((b) => (
            <div key={b.id} className="brand-logo">
              <img src={b.logo} alt={b.name} />
            </div>
          ))}
      </div>
    </section>
  )
}
