import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { PresentadorComponent } from './presentador/presentador.component';
import { ClientesService } from './servicios/clientes.service';



@NgModule({
  declarations: [ContenedorComponent, PresentadorComponent],
  imports: [
    CommonModule
  ],
  exports: [ContenedorComponent],
  providers: [ClientesService]
})
export class ClientesModule { }
