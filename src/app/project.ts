type Nullable<T> = T | null;

export interface Project {
    title: string;
    link: string;
    description: string;
    technologies: Array<string>;
    coverImage: Nullable<string>;
    backgroundColor: string;
}
