import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
pro=[];
  constructor( private c:ServiceService) { }

  ngOnInit() {
    this.pro=this.c.cart
    
  }
  getcats(){
    return this.c.cart
  }


}
