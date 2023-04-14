import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .hero {
      background-image: url('/assets/background.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class HomeComponent {

}
