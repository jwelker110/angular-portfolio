export interface UserSkill {
    name: string;
    level: number;
}

export interface UserDetail {
    title?: string;
    content: string;
}

interface UserProfile {
    avatarUrl?: string;
    name: string;
    skills?: UserSkill[];
    bio?: string;
    details?: UserDetail[];
    resume?: string;
    links?: Link[];
    stackOverflow?: string;
    personalSite?: string;
    locationCity?: string;
    locationRegion?: string;
}

interface Link {
    url: string;
    text: string;
    icon?: string;
}