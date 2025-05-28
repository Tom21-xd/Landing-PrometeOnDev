export interface Social {
  icon: string;
  url: string;
}

export interface ProjectData {
  title: string;
  type?: string;
  shortDescription: string;
  tools: string;
  author: string;
  link?: string;
  socials?: Social[];
  gallery: string[];
}
