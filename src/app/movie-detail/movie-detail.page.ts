import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../attributes/movie';
import { MovieInfoService } from '../services/movie-info.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: false,
})
export class MovieDetailPage implements OnInit {
  movie?: Movie;
  private route = inject(ActivatedRoute);
  private movieInfoService = inject(MovieInfoService);

  constructor() { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieInfoService.getMovieById(id);
  }

}
