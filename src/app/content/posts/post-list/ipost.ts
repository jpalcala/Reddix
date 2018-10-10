export interface IPost {
    id: string;
    title: string;
    tag: string;
    subReddit: string;
    postedBy: string;
    postedDate: Date;
    commentsNumber: number;
}
