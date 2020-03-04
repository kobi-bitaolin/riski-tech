import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from 'src/app/services/the-movie-db.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private theMovieDB: TheMovieDBService) { }

  movies: Movie[] = [];

  ngOnInit(): void {

  }

  handleSubmit(moviesForm) {
    console.log('submit');

    const query: string = moviesForm.value.query;

    this.theMovieDB.getMovies(query)
      .subscribe(data => {
        data.map(movie =>
          movie.poster_path = 'https://image.tmdb.org/t/p/w500' + movie.poster_path)
        this.movies = data;
        console.log(data);
      });
  }

 

}
