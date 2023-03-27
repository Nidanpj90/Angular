import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProvinciasComponent } from './lista-provincias/lista-provincias.component';
import { ServicioPvPbService } from './Servicios/servicio-pv-pb.service';



@NgModule({
  declarations: [
    ListaProvinciasComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ServicioPvPbService]
})
export class ProvinciasPueblosModule { }
