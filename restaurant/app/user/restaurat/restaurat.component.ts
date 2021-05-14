import { Component, OnInit } from '@angular/core';
import {ROUTES,Router } from "@angular/router";
import { Observable } from 'rxjs';
import { CrudService } from "../itemlist.service";
import{item} from "../observableitem"

@Component({
  selector: 'app-restaurat',
  template:`
  <div (click)="onselect(rest)"*ngFor="let rest of itemlist">
    <h2>{{rest.id}} {{rest.name}}</h2>
  </div>
  `,
  
  styleUrls: ['./restaurat.component.css']
})
export class RestauratComponent implements OnInit {
  
  public itemlist:item[]=[];
  constructor(private router:Router, private item:CrudService) {
    
  } 

  
  onselect(rest:any){
    this.router.navigate(['/restaurat',rest.id]);
  }



  ngOnInit(): void {
    this.itemlist=this.item.getItems();
  }
 
}
