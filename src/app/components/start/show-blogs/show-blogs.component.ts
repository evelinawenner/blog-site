import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.scss']
})
export class ShowBlogsComponent implements OnInit {
  @Input() blog: Blog;  
  blogs: Blog[] = [];

  constructor(private service: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
  }

  deleteBlogs() {
    this.service.deleteBlogs(this.blog.id).subscribe(() => {
      console.log('Blog deleted')
      this.service.getBlogs();
    });
  }

  showBlog(item: Blog): void {
    let id = item.id
   
this.router.navigate(['/posts', id])
  }

}


