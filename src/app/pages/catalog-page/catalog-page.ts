import { Component } from '@angular/core';
import { MOVIES } from '../../constants/movies.constants';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {
  constructor(private _movieService: MovieService) {}

  public get movies(): Movie[] {
    return this._movieService.filteredMovies
  }
}
