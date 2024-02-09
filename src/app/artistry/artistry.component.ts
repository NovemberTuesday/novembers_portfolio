import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistry',
  templateUrl: './artistry.component.html',
  styleUrls: ['./artistry.component.css']
})
export class ArtistryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      const element = document.querySelector('.fade-in');
      if (element) {
        element.classList.add('fade-in-active');
      }
    }, 200);
  }

}
