import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/BlogPost';
import { Comments } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comments[] = [];
  post: Posts;
  paramId: number = 0;

  constructor(private service: PostService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))})

      this.service.post$.subscribe((data: Posts) => {this.post = data})
  this.service.getPost(this.paramId);
  }

}
