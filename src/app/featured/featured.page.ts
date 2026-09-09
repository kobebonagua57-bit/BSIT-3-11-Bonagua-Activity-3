import { Component, inject } from '@angular/core';
import { Movie } from '../attributes/movie';
import { MovieInfoService } from '../services/movie-info.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
  standalone: false,
})
export class FeaturedPage {
  movies: Movie[] = [];
  private movieInfoService = inject(MovieInfoService);

  constructor() {
    this.movies = this.movieInfoService.getMovies();
  }
}
