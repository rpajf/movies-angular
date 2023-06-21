import { NgModule } from '@angular/core';
import { MovieItemComponent } from './movie-item.component';
import { MovieSingleComponent } from '../movie-single/movie-single.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  imports: [CommonModule],
  declarations: [MovieItemComponent, MovieSingleComponent, DashboardComponent],
  exports: [MovieItemComponent, DashboardComponent],
})
export class MovieItemModule {}
