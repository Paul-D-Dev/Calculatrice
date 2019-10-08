import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatriceComponentComponent } from './calculatrice-component/calculatrice-component.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { KeyboardComponentComponent } from './keyboard-component/keyboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponentComponent,
    DisplayComponentComponent,
    KeyboardComponentComponent
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
