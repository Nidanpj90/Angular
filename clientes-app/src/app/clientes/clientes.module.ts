import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ClientesService } from './servicios/clientes.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[AltaClienteComponent,ListadoClientesComponent],
  providers:[ClientesService]
})
export class ClientesModule { }
