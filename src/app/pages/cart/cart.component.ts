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
  p:number=0;
  
 ngOnInit() {

    // this.pro=this.c.cart
            
            this.cart=this.c.cart;
            this.cartkeys=this.c.cartkeys;
            this.upDate();
        };

        // getdata(){
        //    return this.c.cartkeys;
        //   // this.cart=this.c.cart;
        // };
    

    upDate(){
            this.p=0
            for(var val of this.cartkeys){
              this.p+=(this.cart[val].quantity*this.cart[val].price*this.cart[val].totalt)
              this.cart=this.c.cart;
              this.cartkeys=this.c.cartkeys;


              }
            }

    
  }
    
