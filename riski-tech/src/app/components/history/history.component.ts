import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  searchHistory: object[];

  constructor() { }

  ngOnInit(): void {
    this.searchHistory = JSON.parse(localStorage.getItem("history"))
    console.log(this.searchHistory);

  }

}
