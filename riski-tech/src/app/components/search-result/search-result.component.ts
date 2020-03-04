import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie);
  }

 


}
