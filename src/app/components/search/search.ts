import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  public searchString: string = ''
  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement
    this.searchString = target.value;
  }

  constructor(private _movieService: MovieService) {}

  public updateSearch(event: Event) {
    this._movieService.searchString = this.searchString;
  }
}
