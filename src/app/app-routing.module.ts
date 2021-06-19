import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path: 'posts/:id', component: PostsComponent},
  {path: 'comments/:id', component: CommentsComponent},
  {path: '', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
