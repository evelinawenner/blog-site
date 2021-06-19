import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Posts } from 'src/app/models/BlogPost';
import { Comments } from 'src/app/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = new Subject<Posts[]>();
  posts$ = this.posts.asObservable();

  private post = new Subject<Posts>();
  post$ = this.post.asObservable();



  constructor(private http: HttpClient) { }



 getPost(paramId:number): void {
   this.http.get<Posts>('https://mi-blogs.azurewebsites.net/api/posts/' + paramId)
   .subscribe((data:Posts) => {this.post.next(data)})
 }

  addPosts(posts: Posts): Observable<Posts>{
    return this.http.post<Posts>('https://mi-blogs.azurewebsites.net/api/posts/', posts, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
  deletePost(id:number): Observable<void> {
    return this.http.delete<void>('https://mi-blogs.azurewebsites.net/api/Blogs/' + id)
}

  getComments(paramId: number): void {
    this.http.get<Posts>('https://mi-blogs.azurewebsites.net/api/posts/' + paramId)
    .subscribe((data:Posts) => {this.post.next(data);});
  }
}
