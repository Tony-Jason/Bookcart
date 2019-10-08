import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Info } from '../info';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private svc:DataService) { }
   booktable : Info;
  ngOnInit() {
    this.booktable = this.svc.bookdetails;
  }

}
