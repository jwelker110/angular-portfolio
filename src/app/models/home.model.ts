import {Link, UserSkill} from './models';
import {UserDetail} from './user.model';

export interface HomeData {
    avatarUrl: string;
    name: string;
    skills: UserSkill[];
    bio: string;
    details: UserDetail[];
    resume: string;
    locationCity: string;
    locationRegion: string;
    links: Link[];
}

