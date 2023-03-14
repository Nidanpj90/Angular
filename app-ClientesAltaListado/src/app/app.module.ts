import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesModule } from './clientes/clientes.module';
import { Routes, RouterModule } from '@angular/router';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';


export const rutas: Routes = [
  { path: 'Alta', component: AltaClienteComponent },
  { path: 'Listado', component: ListadoClientesComponent },
  { path: 'Alta/edita/:cli', component: AltaClienteComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ClientesModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
