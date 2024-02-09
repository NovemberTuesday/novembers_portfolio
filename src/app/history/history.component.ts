import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  showMore: boolean = false;
  showMore_1:boolean = false;


  constructor() { }

  ngOnInit(): void {

 
  }

  toggleText(event: Event) {
    event.preventDefault();
    this.showMore = true;
  }
  toggleText_1(event: Event){
    event.preventDefault();
    this.showMore_1 = true;
  }



   
  }