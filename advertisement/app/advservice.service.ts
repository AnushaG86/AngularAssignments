import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import{obj} from "./form/observable"

@Injectable({
  providedIn: 'root'
})
export class AdvserviceService {
  list=[{
    "id":1,
    "title":"samsung mobiles",
    "name":"Samantha",
   "category":"Mobile",
    "comments":"very reliable and good battery backup"

  }]
  getList(){
    return this.list;
  }
 
  getlistbyid(id:number){
    var val;
    for(var i=0;i<this.list.length;i++){
      if(this.list[i].id===id){
        val= this.list[i];
      }
    }
    return val;
  }

}
