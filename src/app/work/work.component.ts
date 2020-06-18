import { Component, OnInit } from '@angular/core';

import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  projects = PROJECTS;

  ngOnInit(): void {
  }

}
