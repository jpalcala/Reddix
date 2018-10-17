import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './content/user/user.component';
import { PostsComponent } from './content/posts/posts.component';
import { PostDetailComponent } from './content/posts/post-detail/post-detail.component';
import { ContainerComponent } from './content/posts/container/container.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: PostsComponent },
  { path: 'users', component: UserComponent },
  {
    path: ':subrredit',
    component: PostsComponent,
    children: [
      { path: '', component: ContainerComponent },
      { path: ':id', component: PostDetailComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
