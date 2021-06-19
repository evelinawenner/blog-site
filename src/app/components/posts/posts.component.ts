import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Posts } from 'src/app/models/BlogPost';
import { Comments } from 'src/app/models/Comment';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Posts[] = [];
  blog: Blog;
  paramId: number = 0;


  constructor(private service: BlogService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
  })

  this.service.blog$.subscribe((data: Blog) => {this.blog = data})
  this.service.getPosts(this.paramId);
}

}
