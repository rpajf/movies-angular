import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

interface Movie {
  title: string;
  overview: string;
  vote_average?: number;
}

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss'],
})
export class MovieSingleComponent {
  @Input() movie: Movie = { title: '', overview: '', vote_average: undefined };
  @Output() changedValue = new EventEmitter();
  @Input() value: any = 0;
  overview: boolean = false;

  renderOverview() {
    this.overview = !this.overview;
  }
  increment() {
    this.value++;
  }
}
