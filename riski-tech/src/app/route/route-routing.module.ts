import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { HistoryComponent } from '../components/history/history.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';


const routes: Routes = [
  {path: '',  component: HomeComponent },
  {path: 'search',  component: SearchComponent },
  {path: 'history',  component: HistoryComponent },
  {path: 'movie/:id',  component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
