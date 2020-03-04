import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from 'src/app/services/the-movie-db.service';
import { Movie } from '../../models/movie';
import { Router } from "@angular/router"


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private theMovieDB: TheMovieDBService, private router: Router) { }

  movies: Movie[] = [];

  ngOnInit(): void {
    this.updateSearchHistory(null)
  }

  handleSubmit(moviesForm) {
    console.log('submit');

    const query: string = moviesForm.value.query;

    this.theMovieDB.getMovies(query)
      .subscribe(data => {
        data.map(movie =>
          movie.poster_path = 'https://image.tmdb.org/t/p/w500' + movie.poster_path)
        this.movies = data;
        this.updateSearchHistory(query)
      })
  }

  updateSearchHistory(query) {
    const oldInfo = JSON.parse(localStorage.getItem("history"));
    if (oldInfo) {
      if (query) {

        const currentDate = new Date();
        const historyItem = {
          query: query,
          date: currentDate
        }
        const newInfo = [...oldInfo, historyItem]
        localStorage.setItem("history", JSON.stringify(newInfo))
      }

    } else {
      localStorage.setItem("history", '[]')
    }
    console.log(JSON.parse(localStorage.getItem("history")));

  }

  movieDetails(id: string) {
    this.router.navigate(['/movie', id])
    console.log(id);

  }

}
