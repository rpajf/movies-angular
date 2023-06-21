import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieItemModule } from './components/movie-item/movie-item.module';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MovieItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

