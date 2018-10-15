import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { MenuComponent } from './layout/menu/menu.component';
import { PostsComponent } from './content/posts/posts.component';
import { PostListComponent } from './content/posts/post-list/post-list.component';
import { PostItemComponent } from './content/posts/post-list/post-item/post-item.component';
import { UserComponent } from './content/user/user.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PostDetailComponent } from './content/posts/post-detail/post-detail.component';
import { PostActionsComponent } from './content/posts/post-actions/post-actions.component';
import { HttpService } from './core/http.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostsComponent,
    UserComponent,
    PostListComponent,
    PostItemComponent,
    PostActionsComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
