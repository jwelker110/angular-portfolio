import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() brand: Nav;
  @Input() navs: Nav[];

  constructor() { }

  ngOnInit() {
    
  }

}

type Nav = {
  route: string;
  text: string;
}