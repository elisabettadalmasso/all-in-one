interface HeroProps {
  title: React.ReactNode;  
  description?: string;     
  badge?: string;
  className?: string;
  titleAos?: string;
  titleDelay?: string;
  descriptionAos?: string;
  descriptionDelay?: string;
}

export default function Hero({
  title,
  badge, 
  description, 
  className, 
  titleAos, 
  titleDelay, 
  descriptionDelay
 }: HeroProps) {
  return(
    <div className={`hero-page ${className || ''}`}>
      {badge && <div className="hero-badge" data-aos="fade-down">{badge}</div>}
      <h1 data-aos={titleAos} data-aos-delay={titleDelay}>
        {title}
      </h1>
      {description && <p data-aos="fade-up" data-aos-delay={descriptionDelay}>{description}</p>}
    </div>
  );
}