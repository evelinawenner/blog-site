import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Posts } from 'src/app/models/BlogPost';
import { Comments } from 'src/app/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments = new Subject<Comments[]>();
  comments$ = this.comments.asObservable();



  constructor(private http: HttpClient) { }

  

  addComments(comment: Comments): Observable<Comments>{
    return this.http.post<Comments>('https://mi-blogs.azurewebsites.net/api/comments', comment, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
