import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/BlogPost';
import { BlogService } from 'src/app/services/blog/blog.service';
import { PostService } from 'src/app/services/post/post.service';
import { CommentService } from 'src/app/services/comment/comment.service'
import { Comments } from 'src/app/models/Comment';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  @Input() blog: Blog;
  comments: Comments[] = [];
  paramId: number = 0;

  constructor(private service: PostService,
    private activatedRoute: ActivatedRoute,
    private commentservice: CommentService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
    })
  }

  createComment(content:string) {
    let newComment = new Comments();
    newComment.content = content;
    newComment.postId = this.paramId;

    this.commentservice.addComments(newComment).subscribe((data: Comments) => { 
      console.log(data)
      this.service.getComments(this.paramId);

    }),
    (error:any) => {console.log(error)}
  }
}
