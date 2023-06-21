import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSingleComponent } from './movie-single.component';

describe('MovieSingleComponent', () => {
  let component: MovieSingleComponent;
  let fixture: ComponentFixture<MovieSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSingleComponent]
    });
    fixture = TestBed.createComponent(MovieSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
