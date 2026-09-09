import { Injectable } from '@angular/core';
import { Movie } from '../attributes/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {
  private readonly movies: Movie[] = [
    {
      id: 1,
      title: 'Hayop ka!: The Nimfa Dimaano Story',
      genre: 'Romance / Comedy',
      banner: 'assets/movies/hayop-ka-banner.jpg',
      synopsis: 'Perfume sales kitty Nimfa Dimaano must choose between her macho mongrel boyfriend, Roger, a janitor, and high-society charmer Iñigo Villanueva, a bourgeoisie business dog.',
      gallery: [
        'assets/movies/hayop-ka-gallery1.jpg',
        'assets/movies/hayop-ka-gallery2.jpg',
        'assets/movies/hayop-ka-gallery3.jpg'
      ]
    },
    {
      id: 2,
      title: '10000 Hours',
      genre: 'Action',
      banner: 'assets/movies/10000-hours-banner.jpg',
      synopsis: 'A senator is about to blow the whistle on a scam that reaches all the way to the president\'s office, but he is implicated in a murder and goes on the run.',
      gallery: [
        'assets/movies/10000-hours-gallery1.jpg',
        'assets/movies/10000-hours-gallery2.jpg',
        'assets/movies/10000-hours-gallery3.jpg'
      ]
    },
    {
      id: 3,
      title: 'Till I Met You',
      genre: 'Comedy, Romance',
      banner: 'assets/movies/till-i-met-you-banner.jpg',
      synopsis: 'Manuel, an elderly gentleman, falls in love with Luisa, a con artist posing as a wealthy socialite. Manuel\'s trusted assistant becomes suspicious of Luisa and does everything he can to expose her.',
      gallery: [
        'assets/movies/till-i-met-you-gallery1.jpg',
        'assets/movies/till-i-met-you-gallery2.jpg',
        'assets/movies/till-i-met-you-gallery3.jpg'
      ]
    },
    {
      id: 4,
      title: 'Walang Awa Kung Pumatay',
      genre: 'Action',
      banner: 'assets/movies/walang-awa-kung-pumatay-banner.jpg',
      synopsis: 'Narding, the son of a deceased cop, becomes a gangster and gets involved with the boss\'s daughter. She eventually dies, and he is wrongfully accused of murdering her.',
      gallery: [
        'assets/movies/walang-awa-kung-pumatay-gallery1.jpg',
        'assets/movies/walang-awa-kung-pumatay-gallery2.jpg',
        'assets/movies/walang-awa-kung-pumatay-gallery3.jpg'
      ]
    },
    {
      id: 5,
      title: 'Hari ng Selda: Anak ni Baby Ama 2',
      genre: 'Action / Drama',
      banner: 'assets/movies/hari-ng-selda-banner.jpg',
      synopsis: 'Angelica visits a prison and starts to fall for Anghel. When people realize what is happening, they try to keep them apart.',
      gallery: [
        'assets/movies/hari-ng-selda-gallery1.jpg',
        'assets/movies/hari-ng-selda-gallery2.jpg',
        'assets/movies/hari-ng-selda-gallery3.jpg'
      ]
    },
    {
      id: 6,
      title: 'Unexpectedly Yours',
      genre: 'Sci-Fi / Action',
      banner: 'assets/movies/unexpectedly-yours-banner.jpg',
      synopsis: 'Two former high school friends renew their relationship when they make the happy discovery that they are now neighbors.',
      gallery: [
        'assets/movies/unexpectedly-yours-gallery1.jpg',
        'assets/movies/unexpectedly-yours-gallery2.jpg',
        'assets/movies/unexpectedly-yours-gallery3.jpg'
      ]
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  searchMovies(term: string): Movie[] {
    const normalizedTerm = term.trim().toLowerCase();
    return this.movies.filter(movie => movie.title.toLowerCase().includes(normalizedTerm));
  }
}