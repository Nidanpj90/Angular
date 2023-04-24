import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../Rutas/app-routing.module';
import { AppComponent } from './ComponentePrincipal/app.component';
import { ProvinciasPueblosModule } from '../provincias-pueblos/provincias-pueblos.module';


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
