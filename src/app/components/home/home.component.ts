import { Project } from '../project/project.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [
    {
      "title": "First Project",
      "imageUrl": "http://placehold.it/350x350",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore accusamus ex ratione rem eligendi. Neque ut expedita explicabo assumenda eaque debitis a sed voluptate.",
      "projectUrl": "https://github.com/jwelker110/udacity-blitz-winery",
      "projectLiveUrl": "http://jwelker.com"
    },
    {
      "title": "Second Project",
      "imageUrl": "http://placehold.it/350x350",
      "description": "Lorem ipsum dolor sit amet. Distinctio dolore accusamus ex ratione rem eligendi. Neque ut expedita explicabo assumenda eaque debitis a sed voluptate.",
      "projectUrl": "https://github.com/jwelker110/udacity-blitz-winery"
    },
    {
      "title": "Third Project",
      "imageUrl": "http://placehold.it/350x350",
      "description": "Lorem ipsum consectetur adipisicing elit. Distinctio rem eligendi. Neque ut  eaque debitis a sed voluptate.",
      "projectUrl": "https://github.com/jwelker110/udacity-blitz-winery",
      "projectLiveUrl": "http://jwelker.com"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
