import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  img1="assets/miredmi8a.jpeg";
  img2="assets/oppof11pro.png";
  img3="assets/realme-3i.jpeg";
  img4="assets/redmik20.jpeg";
  img5="assets/samsung-galaxy-a10.jpeg";
 



  constructor() { }
  products=[
         {id:1,name:"MI Note8 Pro",price:15000,image:this.img1,per:'10%',perc:90/100},
         {id:2,name:"Oppo F11 Pro",price:15990,image:this.img2,per:'20%',perc:80/100},
         {id:3,name:"Realme-3i",price:10000,image:this.img3,per:'15%',perc:85/100},
         {id:4,name:"Redmik20",price:20000,image:this.img4,per:'5%',perc:95/100},
         {id:5,name:"samsung-galaxy-a10",price:8000,image:this.img5,per:'10%',perc:90/100},
         {id:6,name:"mi",price:7500,image:this.img5,per:'10%',perc:90/100},
         {id:7,name:"MI Note8 Pro",price:15000,image:this.img1,per:'10%',perc:90/100},
         {id:8,name:"Oppo F11 Pro",price:15990,image:this.img2,per:'20%',perc:80/100},
         {id:9,name:"Realme-3i",price:10000,image:this.img3,per:'15%',perc:85/100},
         {id:10,name:"Redmik20",price:20000,image:this.img4,per:'5%',perc:95/100},
         {id:11,name:"samsung-galaxy-a10",price:8000,image:this.img5,per:'10%',perc:90/100},
         {id:12,name:"mi",price:7500,image:this.img5,per:'10%',perc:90/100},
         
     ]

     cart={};
     cartkeys=[];

     
}
