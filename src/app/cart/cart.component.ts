import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private svc:DataService) { }
  bookscart = this.svc.bookscart;
  total:number=0;

  ngOnInit() {
    this.bookscart.forEach(b => {
      this.total+=b.price;
    });
  }
  final(){
    alert("Your order has been succesfully placed");
    window.location.reload();
  }

}
