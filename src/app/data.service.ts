import { Injectable } from '@angular/core';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bookdetails: Info;
  id : number;
  name : string;
  author : string;
  price : number;
  desc : string;
  image : string;
  bookscart :Info[] = [];
  addbook(booktable:Info){
  
      this.bookscart.push(booktable);
      console.log(this.bookscart);
  }
 

  constructor() { }
}
