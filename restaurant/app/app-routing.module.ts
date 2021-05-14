import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RestauratComponent } from './restaurat/restaurat.component';

const routes: Routes = [
  {path:"restaurat",component:RestauratComponent},
  {path:"MENU/:id",component:MenuComponent},
  {path:'restaurat/:id',component:MenuComponent},
  
];
export const routecomponent=[RestauratComponent,MenuComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
