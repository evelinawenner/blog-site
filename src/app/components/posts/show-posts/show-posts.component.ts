import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/BlogPost';
import { BlogService } from 'src/app/services/blog/blog.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.scss']
})
export class ShowPostsComponent implements OnInit {
  @Input() post: Posts; 
  posts: Posts[] = [];

  paramId: number = 0;

  constructor(private service: PostService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blogservice: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
    })
  }

  // deletePost() {
  //   this.service.deletePost(this.posts.id).subscribe(() => {
  //     console.log('Post deleted')
  //     this.blogservice.getPosts();
  //   });
  // }

  showPost(item: Posts): void {
    let id = item.id
   
this.router.navigate(['/comments', id])
  }

}
