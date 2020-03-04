import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { HistoryComponent } from '../components/history/history.component';


const routes: Routes = [
  {path: '',  component: HomeComponent },
  {path: 'search',  component: SearchComponent },
  {path: 'history',  component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
