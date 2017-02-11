import {Component, Input, OnInit} from '@angular/core';
import Timer = NodeJS.Timer;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() brand: Nav;
  @Input() navs: Nav[];

  navOpen = false;
  timeoutId: Timer;

  constructor() {
  }

  ngOnInit() {

  }

  toggleNav = () => {
    this.navOpen = !this.navOpen;
  };

  closeNav = () => {
    this.navOpen = false;
  }

}

type Nav = {
  route: string;
  text: string;
}
