import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { ArticlesServiceService } from './services/articles-service.service';
import { MaxTextLengthPipe } from './pipes/max-text-length.pipe ';
import { HighlightTextPipe } from './pipes/highlight-text.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleItemComponent,
    ArticlePageComponent,
    MaxTextLengthPipe,
    HighlightTextPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [ MaxTextLengthPipe, HighlightTextPipe
  ],
  providers: [ArticlesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
