import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';

export const rutas: Routes = [
  { path: 'Alta', component: AltaClienteComponent },
  { path: 'Listado', component: ListadoClientesComponent },
  { path: 'Alta/edita/:cli', component: AltaClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
