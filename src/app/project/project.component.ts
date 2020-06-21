import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() project: Project;

  ngOnInit(): void {
  }

  getTechnologies(): string {
    let technologies = '';
    this.project.technologies.forEach((technology, idx) => {
      if (idx === this.project.technologies.length - 1) {
        technologies += technology;
      } else {
        technologies += technology + ', ';
      }
    });
    return technologies;
  }
}
