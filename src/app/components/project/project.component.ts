import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() description: string;
  @Input() projectUrl: string;

  constructor() { }

  ngOnInit() {
  }

}

export interface Project {
  title: string;
  imageUrl?: string;
  description: string;
  projectUrl: string;
  projectLiveUrl?: string;
}
