import { Component, OnInit, ɵConsole } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private service:ServiceService) { }

 

  ngOnInit() {
    
  }
  getData(){
   
    return this.service.products;
  }
  // addToCart(p){ cbvx1` 12
  //   this.service.cart.push(p)
  //   this.service.cart[p.id]["quantity"] = this.service.cart[p.id]["quantity"]+1;
  // }

  addToCart(p:any){
    if(this.service.cart.hasOwnProperty(p.id)){
      this.service.cart[p.id]["quantity"] += 1;
    }else{
          this.service.cart[p.id] = {quantity:1,name:p.name,discount:p.per,price:p.price,total:p.price,totalt:p.perc};
          this.service.cartkeys.push(p.id);
         }
    }

  


  

}
