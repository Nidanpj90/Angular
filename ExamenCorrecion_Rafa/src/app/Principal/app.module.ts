import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProvinciasPueblosModule } from '../provincias-pueblos/provincias-pueblos.module';

import { AppRoutingModule } from '../Rutas/app-routing.module';
import { AppComponent } from './ComponentePrincipal/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProvinciasPueblosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
