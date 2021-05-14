import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { HtmltableComponent } from './htmltable/htmltable.component';

const routes: Routes = [
  {path:'forms',component:FormComponent},
  {path:'htmltable',component:HtmltableComponent},
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
