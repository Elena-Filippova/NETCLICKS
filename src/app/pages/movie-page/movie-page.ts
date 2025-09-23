import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../../constants/movies.constants';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-page',
  standalone: false,
  templateUrl: './movie-page.html',
  styleUrl: './movie-page.css'
})
export class MoviePage implements OnInit {
  public movies: Movie[] = []
  public movie!: Movie

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _moviesService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id");
    this.movies = this._moviesService.getFullMovies;
    this._initMovie(Number(id));
  }

  private _initMovie(id: number) {
    const findMovie = this.movies.find(movie => movie.id === id);

    if (findMovie) {
      this.movie = findMovie
    } else {
      this._router.navigate(["/"])
    }
  }
}
