import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ClientesModule } from './clientes/clientes.module';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';

export const rutas: Routes = [
  { path: 'alta', component: AltaClienteComponent },
  { path: 'listado', component: ListadoClientesComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ClientesModule,RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

