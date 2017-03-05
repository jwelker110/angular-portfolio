
import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];

  constructor() { }

  ngOnInit() {
  }

}
