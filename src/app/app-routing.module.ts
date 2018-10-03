import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortComponent } from './content/sort/sort.component';

const routes: Routes = [
  { path: '', component: SortComponent, pathMatch: 'full' },
  { path: 'new', component: SortComponent },
  { path: 'controversial', component: SortComponent },
  { path: 'top', component: SortComponent },
  { path: 'rising', component: SortComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
