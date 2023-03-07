import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './servicios/usuarios.service';
import { TablaObjetoComponent } from './tabla-objeto/tabla-objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaObjetoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
