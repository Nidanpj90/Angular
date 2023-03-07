import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPreguntasComponent } from './listado-preguntas/listado-preguntas.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoPreguntasComponent,
    CuadradoComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[
    ListadoPreguntasComponent,CuadradoComponent
  ]
})
export class DirectivasEstructuralesModule { }
