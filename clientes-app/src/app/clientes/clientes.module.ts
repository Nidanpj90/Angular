import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ClientesService } from './servicios/clientes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';



@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  exports:[
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
