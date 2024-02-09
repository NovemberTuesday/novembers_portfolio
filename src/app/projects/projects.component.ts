import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  viewResult: boolean = false;
  viewCertificate: boolean = false;
  showMore_1: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleText(event: Event) {
    event.preventDefault();
    this.viewResult = true;
  }
  toggleText_1(event: Event){
    event.preventDefault();
    this.showMore_1 = true;
  }

  toggleText_2(event: Event){
    event.preventDefault();
    this.showMore_1 = false;
  }

  toggleText_3(event: Event){
    event.preventDefault();
    this.viewCertificate= true;
  }

  toggleText_to_close(event: Event){
    event.preventDefault();
    this.viewResult = false;
  }

}
