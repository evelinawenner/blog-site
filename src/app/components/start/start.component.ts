import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  blogs: Blog[] = [];
  
  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.blogs$.subscribe((data:Blog[]) => {this.blogs = data;});
    this.service.getBlogs();
  }

}
