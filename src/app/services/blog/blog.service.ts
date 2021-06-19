import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Blog } from 'src/app/models/Blog';
import { blogResponse } from 'src/app/models/BlogResponse';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  private blog = new Subject<Blog>();
  blog$ = this.blog.asObservable();

  paramId: number = 0;

  constructor(private http: HttpClient) { }

  getBlogs(): void {
    this.http.get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/8909')
    .subscribe((data:Blog[]) => {this.blogs.next(data);});
  }

  addBlogs(blog: Blog): Observable<Blog>{
    return this.http.post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs', blog, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  deleteBlogs(id:number): Observable<void> {
    return this.http.delete<void>('https://mi-blogs.azurewebsites.net/api/Blogs/' + id)
}

getPosts(paramId: number): void {
  this.http.get<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/' + paramId)
    .subscribe((data:Blog) => {this.blog.next(data);});
}
}
