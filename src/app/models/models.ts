import {Asset} from 'contentful';

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
    details: any;
    locationCity?: string;
    locationState?: string;
    locationRegion?: string;
    stackOverflow?: string;
    personalSite?: string;
}

export interface Link {
    url: string;
    text: string;
    icon?: string;
}

export interface Project {
    title: string;
    primaryImage?: Asset;
    shortDescription: string;
    fullDescription?: string;
    liveUrl?: string;
    sourceUrl?: string;
}
