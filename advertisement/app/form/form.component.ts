import { Component, OnInit } from '@angular/core';
import {AdvserviceService} from "../advservice.service";
import {obj} from "./observable";
import {ROUTES,Router,RouterLinkActive} from "@angular/router"


@Component({
  selector: 'app-form',
  template: `
  <head>
  <style>
      header{
          font-size: 200%;
          font-family: Georgia, 'Times New Roman', Times, serif;
          text-align: center;
      }
      h2{
          font-family: cursive;
          font-size: 150%;
          text-align: left;
      }
      #ADVERTISEMENTINFO{
          text-align:center;
          margin-left: 20%;
          margin-right: 20%;
          border-collapse: collapse;
          border-style: solid;
      }
      body{
          background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8v3XkZsSWKBnakQ1xjHvRfCb0KrufKzu2Ew&usqp=CAU);
          background-repeat: no-repeat;
          background-size: cover;
      }
      #hobbies{
          text-align:center;
      }
      table,th,td{
          border:1px solid black;
          border-collapse: collapse;
        }
        #htmltable{
            text-align:center;
            margin-left:30%;
        }
  </style>
  <title>advertisement FORMS</title>
</head>
<body>
  <header>ADVERTISEMENT INFORMATION</header>
  <h2>Help us get to know more about your advertisement:)</h2>
  <div id="ADVERTISEMENTINFO">
      title:<input type="text" id="title" required [(ngModel)]="title"><br><br>
      name:<input type="text" id="name" required [(ngModel)]="name"><br><br>
          category:<select id="category" [(ngModel)]="category">
          <option value="Furiture">FURNITURE</option>
          <option value="Hardware">HARDWARE</option>
          <option value="Mobile">MOBILE</option>
      </select><br><br>
      <label id="comments">Tell about advertisement:</label>
      <textarea id="comments" cols="40" rows="10" placeholder="enter here" [(ngModel)]="comments"></textarea><br><br>
      <button type="submit" style="background-color: rgb(46, 189, 46)" (click)="additem(title,name,category,comments)">SUBMIT</button>
      <button type="submit" style="background-color: rgb(46, 189, 46)" (click)="gotohtml()">SHOWADVERTISEMENTS</button>
    </div>
    <div>
    <table style="width:30%" id="htmltable" *ngFor="let list of listofadv">
    <tr>
      <th>title</th>
      <th>name</th>
      <th>category</th>
      <th>comments</th>
    </tr>
    <tr>
      <td>{{list.title}}</td>
      <td>{{list.name}}</td>
      <td>{{list.category}}</td>
      <td>{{list.comments}}</td>
    </tr>
    
  </table>
    
    
    
    
    </div>
</body>
  `,
  styles: [
  ]
})
export class FormComponent implements OnInit {
  public title="";
  public name="";
  public category="";
  public comments="";
  public listofadv:obj[]=[];
  constructor(private list:AdvserviceService ,private router:Router){}
  ngOnInit(): void {
      this.listofadv=this.list.getList();
  }
  additem(title1:any,name1:any,category1:any,comments1:any){
      this.list.list.push({ id:this.list.list.length+1,title:title1,name:name1,category:category1,comments:comments1});
  }

  gotohtml(){
    this.router.navigate(['htmltable']);
  }


}
