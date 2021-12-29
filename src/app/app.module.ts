import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { PlatformModule } from '@angular/cdk/platform';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    ScrollingModule,
    PlatformModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
