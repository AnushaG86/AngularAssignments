import { Component, OnInit } from '@angular/core';
import { ROUTES,Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-menu',
  template: `
  <div  [ngSwitch]="restid">
    <div *ngSwitchCase="'1'">
      <h1>South King Spice menu <a id="option">(INSERT)</a><a id="option">(DELETE)</a></h1>
      <div (click)="submit()"*ngFor="let list of rest1">
        <h2>{{list.name}}</h2>
      </div>
    </div>
    <div *ngSwitchCase="'2'">
      <h1>Chipotle Mexican Grill menu <a id="option">(INSERT)</a><a id="option">(DELETE)</a></h1>
      <div (click)="submit()"*ngFor="let list of rest2">
        <h2>{{list.name}}</h2>
      </div>
    </div>
    <div *ngSwitchCase="'3'">
      <h1>Chez Panisse Cafe menu <a id="option">(INSERT)</a><a id="option">(DELETE)</a></h1>
      <div (click)="submit()"*ngFor="let list of rest3">
        <h2>{{list.name}}</h2>
      </div>
    </div>
    <div *ngSwitchCase="'4'">
      <h1>Basic Kneads Pizza menu <a id="option">(INSERT)</a><a id="option">(DELETE)</a></h1>
      <div (click)="submit()"*ngFor="let list of rest4">
        <h2>{{list.name}}</h2>
      </div>
    </div>
    <div *ngSwitchCase="'5'">
      <h1>spago menu <a id="option">(INSERT)</a><a id="option">(DELETE)</a></h1>
      <div (click)="submit()" *ngFor="let list of rest5">
        <h2>{{list.name}}</h2>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public rest1=[{id:1,name:"Thalassery biryani"},{id:2,name:"Puttu and Kadalakarri"},{id:3,name:"Medu Vada and Idli"},{id:4,name:"Hyderabadi biryani"}];
  public rest2=[{id:1,name:"Chilaquiles"},{id:2,name:"Chiles en nogada"},{id:3,name:"Enchiladas"},{id:4,name:"Chiles en nogada"}];
  public rest3=[{id:1,name:"Sandwiches"},{id:2,name:"Espresso"},{id:3,name:"Latte"},{id:4,name:"Donuts"},{id:5,name:"Croissant"}];
  public rest4=[{id:1,name:"Cheese Pizza"},{id:2,name:"Margherita Pizza"},{id:3,name:"BBQ Chicken Pizza"},{id:4,name:"Hawaiian Pizza"}];
  public rest5=[{id:1,name:"Spicy Harisa Olio Gamberoni"},{id:2,name:"Bistecca"},{id:3,name:"Branzino Ala Diavola"},{id:4,name:"Salmone Ala Griglia"}];
  public restid=0;

  constructor(private route:ActivatedRoute, private router:Router) {
    
  }

  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.params.id);
    this.restid=id;
  }
  submit(){
    alert("your order has been taken");
  }
  
  

}
