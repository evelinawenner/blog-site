import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/user/8909')
  }
}
