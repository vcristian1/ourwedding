export enum SelectedPage {
    Home = "home",
    OurStory = "ourstory",
    TheWedding ="thewedding",
    Registry = "registry",
    Faqs = "faqs",
  }

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }