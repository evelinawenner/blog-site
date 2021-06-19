import { Posts } from "./BlogPost";

export class Blog {
    id: number;
    title: string;
    created: Date;
    userId: number = 8909;
    posts: Posts[];
}