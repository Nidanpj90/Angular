import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService} from './clientes.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [
    ClientesService
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ]
})
export class ClientesModule { }
