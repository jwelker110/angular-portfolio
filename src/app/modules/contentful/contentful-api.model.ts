export interface IContentfulQuery {
    [key: string]: any;
    linkingField?: string;
    content_type?: string;
    id?: string;
    include?: number | string;
    skip?: number;
    limit?: number;
    links_to_entry?: string;
    select?: string;
    query?: string;
}


