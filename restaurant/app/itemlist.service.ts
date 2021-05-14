import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CrudService {
  item=[{
    "name":" South King Spice",
    "id":1

},
{
    "name":"Chipotle Mexican Grill",
    "id":2

},
{
    "name":"Chez Panisse Cafe",
    "id":3

},
{
    "name":"Basic Kneads Pizza",
    "id":4

},
{
    "name":"Spago",
    "id":5

}
];
  menu1=[{id:1,name:"Thalassery biryani"},{id:2,name:"Puttu and Kadalakarri"},{id:3,name:"Medu Vada and Idli"},{id:4,name:"Hyderabadi biryani"}];
  menu2=[{id:1,name:"Chilaquiles"},{id:2,name:"Chiles en nogada"},{id:3,name:"Enchiladas"},{id:4,name:"Chiles en nogada"}];
  menu3=[{id:1,name:"Sandwiches"},{id:2,name:"Espresso"},{id:3,name:"Latte"},{id:4,name:"Donuts"},{id:5,name:"Croissant"}];
  menu4=[{id:1,name:"Cheese Pizza"},{id:2,name:"Margherita Pizza"},{id:3,name:"BBQ Chicken Pizza"},{id:4,name:"Hawaiian Pizza"}];
  menu5=[{id:1,name:"Spicy Harisa Olio Gamberoni"},{id:2,name:"Bistecca"},{id:3,name:"Branzino Ala Diavola"},{id:4,name:"Salmone Ala Griglia"}];
  

  getItems() {
    return this.item;
  }
}