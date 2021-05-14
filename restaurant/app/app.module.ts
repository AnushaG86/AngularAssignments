import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from"@angular/forms"
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RestauratComponent } from './restaurat/restaurat.component';
import { UserComponent } from './user/user.component';
import  {CrudService}from "./itemlist.service"

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RestauratComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CrudService,MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
