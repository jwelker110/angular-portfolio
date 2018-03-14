export interface UserSkill {
  name: string;
  level: number;
}

export interface UserProfile {
  avatarUrl?: string;
  name: string;
  skills?: UserSkill[];
  details?: Detail[];
  bio: string;
  resume?: string;
  links?: Link[];
  stackOverflow?: string;
  personalSite?: string;
  locationCity?: string;
  locationRegion?: string;
}

export interface Detail {
    title: string;
    content: string;
}

export interface Link {
  url: string;
  text: string;
  icon?: string;
}

export interface Project {
  title: string;
  imageUrl?: string;
  description: string;
  projectRepoUrl?: string;
  projectLiveUrl?: string;
}
