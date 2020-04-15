import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './materials/material/material.module';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportComponent } from './components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    FooterComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
