import { Comments } from "./Comment";

export class Posts {
    id: number;
    title: string;
    content: string;
    blogId: number;
    comments: Comments[];
}