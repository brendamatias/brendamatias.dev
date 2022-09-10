export interface IExperience {
  slug: string;
  job: string;
  company: string;
  description: string;
  started_in: string;
  finished_in?: string;
}

export interface IProject {
  slug: string;
  title: string;
  link: string;
  technologies: string[];
  image: {
    dimensions: { width: number; height: number };
    alt: string;
    url: string;
  };
}
