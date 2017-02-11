export interface UserSkill {
  name: string;
  level: number;
}

export interface UserProfile {
  avatarUrl?: string;
  name: string;
  skills?: UserSkill[];
  bio: string;
  resume?: string;
  links?: Link[];
  stackOverflow?: string;
  personalSite?: string;
}

export interface Link {
  url: string;
  text: string;
  icon?: string;
}
