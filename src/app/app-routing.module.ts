import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './content/user/user.component';
import { PostsComponent } from './content/posts/posts.component';


const routes: Routes = [
  { path: '', component: PostsComponent, pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: ':subrredit', component: PostsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
