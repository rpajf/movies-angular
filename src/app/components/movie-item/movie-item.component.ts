import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/utils/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit, OnDestroy {
  data: any; // store the data here
  dataSubscription!: Subscription;
  isLoading: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 15;
  toggleLoading: () => boolean = () => (this.isLoading = !this.isLoading);
  constructor(
    private dataService: DataService,
  ) {}


  loadData() {
    this.toggleLoading();
    this.dataSubscription = this.dataService
      .getData(this.currentPage)
      .subscribe({
        next: (data) => {
          this.data = {
            ...this.data,
            results: [...(this.data?.results || []), ...data.results],
          };
        },
        error: (err) => console.error(err),
        complete: () => this.toggleLoading(),
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
  onScroll = () => {
    this.loadData();
    this.currentPage++;
  };
}
