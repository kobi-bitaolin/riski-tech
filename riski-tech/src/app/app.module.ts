import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouteRoutingModule} from './route/route-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './components/history/history.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HistoryComponent,
    SearchResultComponent,
    NavbarComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
