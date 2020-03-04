import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheMovieDBService } from 'src/app/services/the-movie-db.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: string;
  movie: Movie;

  constructor(private activatedRoute: ActivatedRoute, private theMovieDB: TheMovieDBService) { }

  ngOnInit(): void {
    this.showMovie()
  }

  showMovie() {
    this.activatedRoute.paramMap
      .subscribe(params => {
        this.id = params.get("id")
        console.log(this.id);
        this.theMovieDB.getMovie(this.id)
          .subscribe(data => {
            data.poster_path = this.formatImageUrl(data.poster_path)
            this.movie = data
          })
      })
  }

  formatImageUrl(url) {
    return 'https://image.tmdb.org/t/p/w500' + url

  }
}
