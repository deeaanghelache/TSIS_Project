import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ExampleModalComponent } from './example-modal/example-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
