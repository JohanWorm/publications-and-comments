import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

//Components
import { HomeComponent } from '../components/home/home.component';
import { CreatePublicationComponent } from 'src/components/create-publication/create-publication.component';
import { ListPublicationsComponent } from 'src/components/list-publications/list-publications.component';
import { PublicationComponent } from 'src/components/publication/publication.component';
import { ListCommentsComponent } from 'src/components/list-comments/list-comments.component';
import { CommentComponent } from 'src/components/comment/comment.component';
import { CreateCommentComponent } from 'src/components/create-comment/create-comment.component';

//Services
import { AppService } from './services/app.service';


@NgModule({
  declarations: [
    HomeComponent,
    CreatePublicationComponent,
    ListPublicationsComponent,
    PublicationComponent,
    ListCommentsComponent,
    CommentComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
