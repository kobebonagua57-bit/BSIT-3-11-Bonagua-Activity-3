import { Component, inject } from '@angular/core';
import { Movie } from '../attributes/movie';
import { MovieInfoService } from '../services/movie-info.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  searchResults: Movie[] = [];

  private movieInfoService = inject(MovieInfoService);

  searchMovies(event: CustomEvent): void {
    this.searchResults = this.movieInfoService.searchMovies(event.detail.value ?? '');
  }
}
