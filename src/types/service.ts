//interface fr Hero.json
export interface Hero {
    id: number
    photo: string
    title: string
    position?: string
}


//interface for services.json 
export interface Service {
    id: number
    title: string
    description: string
    icon: string
}

// interface for servicesDetail.json
export interface ServiceDetail {
    id: number
    title: string
    photo: string
    fallback?: string
    fullDescription?: string
    isRental?: boolean
}

// interface for brand.json
export interface Brand {
    id: number
    name: string
    logo: string
    category: "audio" | "ligths" | "video" | "structures" | "electricity";
}

// interface for works.json
export interface Work {
    id: number
    title: string
    photo: string
    fallback?: string
    position?: string
}

// interface for eventTypes.json
export interface EventType {
    id: number
    category: string
    photo: string
    description: string
}