import { Component, OnInit } from '@angular/core';
import {ROUTES,Router,ActivatedRoute} from "@angular/router";
import{obj} from "../form/observable";
import {AdvserviceService} from "../advservice.service"

@Component({
  selector: 'app-edit',
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
      title:<input type="text" id="title" required [(ngModel)]="listofadv.title"><br><br>
      name:<input type="text" id="name" required [(ngModel)]="name"><br><br>
          category:<select id="category" [(ngModel)]="category">
          <option value="Furiture">FURNITURE</option>
          <option value="Hardware">HARDWARE</option>
          <option value="Mobile">MOBILE</option>
      </select><br><br>
      <label id="comments">Tell about advertisement:</label>
      <textarea id="comments" cols="40" rows="10" placeholder="enter here" [(ngModel)]="comments"></textarea><br><br>
    </div>
  <div>
  `,
  styles: [
  ]
})
export class EditComponent implements OnInit {
  public title="";
  public name="";
  public category="";
  public comments="";
  public id=0;
  public listofadv: { id: number; title: string; name: string; category: string; comments: string; } | undefined;
  constructor(private routes:ActivatedRoute, private router:Router ,private advservice:AdvserviceService ) { }

  ngOnInit(): void {
    this.id=parseInt(this.routes.snapshot.params.id);
    this.listofadv=this.advservice.getlistbyid(this.id);
  }

}
