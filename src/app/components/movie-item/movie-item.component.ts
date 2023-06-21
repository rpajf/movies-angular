import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/utils/data.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit, OnDestroy {
  data: any; // store the data here
  dataSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataSubscription = this.dataService.getData().subscribe({
      next: (data) => {
        console.log('data',data.results)
        this.data = data;
      },
      error: (err) => console.error(err),
      complete: () => console.log('Data loaded'),
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
