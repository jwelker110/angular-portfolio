import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills: { [name: string]: string }[];

  constructor() { }

  ngOnInit() {
  }

}
