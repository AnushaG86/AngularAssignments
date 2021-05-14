import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdvserviceService } from './advservice.service';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HtmltableComponent } from './htmltable/htmltable.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HtmltableComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdvserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
