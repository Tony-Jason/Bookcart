import { Component, OnInit } from '@angular/core';
import { Info } from '../info'
import { bookdesc} from '../bookdesc'
import { DataService } from '../data.service'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private svc:DataService) { }
  books = bookdesc;
  
  ngOnInit() {
  }
onClick(sigbook:Info){
  this.svc.bookdetails = sigbook;
}
}
