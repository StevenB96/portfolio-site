export interface ExternalLink {
  label: string;
  url: string;
  text: string;
}

export interface CardItem {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  redirectUrl?: string;
}

export interface SimpleItem {
  id: string;
  title: string;
  text?: string;
  redirectUrl?: string;
}

export interface PersonInfo {
  name: string;
  lastUpdated: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  links: ExternalLink[];
}

export interface PortfolioData {
  person: PersonInfo;
  summary: string;
  experience: CardItem[];
  education: CardItem[];
  skills: CardItem[];
  projects: CardItem[];
  certifications: SimpleItem[];
  courses: CardItem[];
  languages: SimpleItem[];
  interests: SimpleItem[];
}