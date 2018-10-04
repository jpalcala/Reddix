import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './content/post-list/post-list.component';


const routes: Routes = [
  { path: '', component: PostListComponent, pathMatch: 'full' },
  { path: 'new', component: PostListComponent },
  { path: 'controversial', component: PostListComponent },
  { path: 'top', component: PostListComponent },
  { path: 'rising', component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
