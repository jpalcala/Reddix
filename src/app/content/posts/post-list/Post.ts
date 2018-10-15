import { IPost } from './ipost';

export class Post implements IPost {
  constructor(
    public author: string,
    public subreddit: string,
    public title: string,
    public thumbnail: string
  ) {}
}
