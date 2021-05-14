import { Component, OnInit } from '@angular/core';
import {AdvserviceService} from "../advservice.service";
import {obj} from "../form/observable";
import {ROUTES,Router,ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-htmltable',
  template:`
  <head>
    <style>
      #htmltable{
          text-align:center;
          margin-left:30%;
        }
        table,th,td{
          border:1px solid black;
          border-collapse: collapse;
        }
      </style>
  </head>
  
  <div>
  <table style="width:30%" id="htmltable" *ngFor="let list of listofadv">
  <tr>
    <th>title</th>
    <th>name</th>
    <th>category</th>
    <th>comments</th>
    <th>actions</th>
  </tr>
  <tr>
    <td>{{list.title}}</td>
    <td>{{list.name}}</td>
    <td>{{list.category}}</td>
    <td>{{list.comments}}</td>
    <td><button type="submit" (click)="gotoedit(list)">EDIT</button><br><br><button type="submit">DELETE</button></td>
    
  </tr>
  
</table>
</div>
  `,
  styleUrls: []
})
export class HtmltableComponent implements OnInit {
  public title="";
  public name="";
  public category="";
  public comments="";
  public listofadv:obj[]=[];
  constructor(private list:AdvserviceService ,private router:Router, ){}
  ngOnInit(): void {
      this.listofadv=this.list.getList();
      
  }
  gotoedit(list:any){
    this.router.navigate(['/edit',list.id]);
  }
  

}
