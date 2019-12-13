import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  img1="assets/miredmi8a.jpeg";
  img2="assets/oppof11pro.jpeg";
  img3="assets/realme-3i.jpeg";
  img4="assets/redmik20.jpeg";
  img5="assets/samsung-galaxy-a10.jpeg";



  constructor() { }
  products=[
         {id:1,name:"MI Note8 Pro",price:15000,image:this.img1},
         {id:2,name:"Oppo F11 Pro",price:15990,image:this.img2},
         {id:3,name:"Realme-3i",price:10000,image:this.img3},
         {id:4,name:"Redmik20",price:20000,image:this.img4},
         {id:5,name:"samsung-galaxy-a10",price:8000,image:this.img5},
         {id:6,name:"mi",price:7500,image:this.img5},
         {id:1,name:"MI Note8 Pro",price:15000,image:this.img1},
         {id:2,name:"Oppo F11 Pro",price:15990,image:this.img2},
         {id:3,name:"Realme-3i",price:10000,image:this.img3},
         {id:4,name:"Redmik20",price:20000,image:this.img4},
         {id:5,name:"samsung-galaxy-a10",price:8000,image:this.img5},
         {id:6,name:"mi",price:7500,image:this.img5}
     ]

     getcat(){
       return this.products;
     }
}
