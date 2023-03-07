import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { BotonSiNoComponent } from './boton-si-no/boton-si-no.component';



@NgModule({
  declarations: [
    MiComponenteComponent,
    BotonSiNoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MiComponenteComponent,
  BotonSiNoComponent]
})
export class Modulo2Module { }
