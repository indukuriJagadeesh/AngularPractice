import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {CustomMaterialModule} from "./material.module";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideMenuComponent,
    FirstComponent,
    SecondComponent,
    TopMenuComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    PdfViewerModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
