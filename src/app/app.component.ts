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
      route: '/projects',
      text: 'Projects'
    }
  ];
  brand = {
    route: '',
    text: 'Jonathan Welker'
  }
}
