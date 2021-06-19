import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { HttpClientModule} from '@angular/common/http';
import { ShowBlogsComponent } from './components/start/show-blogs/show-blogs.component';
import { CreateBlogComponent } from './components/start/create-blog/create-blog.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { ShowPostsComponent } from './components/posts/show-posts/show-posts.component';
import { CreatePostComponent } from './components/posts/create-post/create-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CreateCommentComponent } from './components/comments/create-comment/create-comment.component';
import { ShowCommentsComponent } from './components/comments/show-comments/show-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ShowBlogsComponent,
    CreateBlogComponent,
    PostsComponent,
    CreatePostComponent,
    ShowPostsComponent,
    CommentsComponent,
    CreateCommentComponent,
    ShowCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
