import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  repoUrl: string = 'https://github.com/jwelker110/ng2-portfolio';

  constructor() { }

  ngOnInit() {
  }

}
