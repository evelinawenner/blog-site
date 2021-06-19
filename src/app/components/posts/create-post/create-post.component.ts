import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/BlogPost';
import { BlogService } from 'src/app/services/blog/blog.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  posts: Posts[] = [];
  paramId: number = 0;

  constructor(private service: PostService,
    private activatedRoute: ActivatedRoute,
    private blogservice: BlogService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
    })
  }

  createPost(title:string, content:string) {
    let newPost = new Posts();
    newPost.title = title;
    newPost.content = content;
    newPost.blogId = this.paramId;

    this.service.addPosts(newPost).subscribe((data:Posts) => { 
      console.log(data)
      this.blogservice.getPosts(this.paramId);

    }),
    (error:any) => {console.log(error)}
  }
}
