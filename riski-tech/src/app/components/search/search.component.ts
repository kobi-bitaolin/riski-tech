import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private theMovieDB: TheMovieDBService) { }

  movies;

  ngOnInit(): void {
    console.log();

  }

  handleSubmit(movies) {
    console.log("submit");

    const query: string = movies.value.query;

    this.theMovieDB.getMovies(query)
      .subscribe(data => {
        this.movies = data;
        console.log(this.movies);
      })
  }

}
