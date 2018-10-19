import { IPost } from './ipost';

export class Post implements IPost {
  constructor(
    public id: string,
    public author: string,
    public subreddit: string,
    public title: string,
    public thumbnail: string,
    public num_comments: number,
  ) { }
}
