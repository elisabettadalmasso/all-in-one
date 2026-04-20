import Link from "next/link"

interface CtaProps {
    title: string
    description: string
    primaryButton: string
    primaryButtonHref: string
    secondaryButton?: string
    secondaryButtonHref?: string
}

export default function Cta({ title, description, primaryButton, primaryButtonHref, secondaryButton, secondaryButtonHref}: CtaProps) {
    return(
        <section className='cta' data-aos="flip-up">
            <h2>{title} </h2>
            <p>{description} </p>
            <div className="cta-buttons">
                <Link href={primaryButtonHref} className="btn-primary">{primaryButton} </Link>
                {secondaryButton && secondaryButtonHref && (
                    <Link href={secondaryButtonHref} className="btn-secondary">
                        {secondaryButton}
                    </Link>
                )}

            </div>
        </section>
    )
}