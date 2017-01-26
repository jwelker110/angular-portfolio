import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // todo move these
  navs = [
    {
      route: '/about',
      text: 'About'
    },
    {
      route: '/projects',
      text: 'Projects'
    }
  ]
  brand = {
    route: '',
    text: 'Go Home'
  }
}
