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
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostDetailComponent } from './content/posts/post-detail/post-detail.component';
import { PostActionsComponent } from './content/posts/post-actions/post-actions.component';
import { HttpService } from './core/http.service';
import { ContainerComponent } from './content/posts/container/container.component';
import { ErrorInterceptor } from './core/error.interceptor';
import { AuthInterceptor } from './core/auth.interceptor';
import { MessageComponent } from './core/message/message.component';
import { MessageService } from './core/message/message.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    PostsComponent,
    ContainerComponent,
    PostListComponent,
    PostItemComponent,
    PostActionsComponent,
    PostDetailComponent,
    MessageComponent
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
    HttpService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  // Tell angular this component will be used dinamically
  entryComponents: [MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
