import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
// import { totalmem } from 'os';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
// pro=[]
cart={};

cartkeys=[];
 



  constructor( private c:ServiceService) { }
  

  ngOnInit() {
    // this.pro=this.c.cart
    
    this.cart=this.c.cart;
    
    this.cartkeys=this.c.cartkeys;
    
      
    }
    // console.log(this.cartkeys);
    // console.log(this.cart)
    
    
  }
  

    
  


 
 
    
 



  
  



