export interface IPost {
    id: string;
    author: string;
    subreddit: string;
    title: string;
    thumbnail: string;
    num_comments: number;
    selftext: string;
    created: Date;
}
